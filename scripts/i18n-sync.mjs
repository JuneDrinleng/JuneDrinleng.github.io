#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const SOURCE_DIR = path.join(projectRoot, "src", "posts");
const TARGET_DIR = path.join(projectRoot, "src", "posts-en");
const I18N_DIR = path.join(projectRoot, "i18n");
const CACHE_FILE = path.join(I18N_DIR, "sync-cache.json");
const TM_FILE = path.join(I18N_DIR, "tm.json");
const PHRASES_FILE = path.join(I18N_DIR, "blog-phrases.json");
const GLOSSARY_FILE = path.join(I18N_DIR, "glossary.csv");

const args = new Set(process.argv.slice(2));
const FIX_FRONTMATTER = args.has("--fix-frontmatter");
const FORCE = args.has("--force");

const TRANSLATOR = process.env.I18N_TRANSLATOR || "none";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.I18N_OPENAI_MODEL || "gpt-4.1-mini";

function sha256(input) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

function safeJsonParse(text, fallback) {
  try {
    return JSON.parse(text);
  } catch {
    return fallback;
  }
}

async function readJson(filePath, fallback) {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return safeJsonParse(raw, fallback);
  } catch {
    return fallback;
  }
}

async function safeWriteFile(filePath, content) {
  const tmpPath = `${filePath}.tmp-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  await fs.writeFile(tmpPath, content, "utf8");

  try {
    await fs.writeFile(filePath, content, "utf8");
    await fs.rm(tmpPath, { force: true });
    return;
  } catch (err) {
    if (!(err && err.code === "EPERM")) {
      await fs.rm(tmpPath, { force: true });
      throw err;
    }
  }

  const backupPath = `${filePath}.bak-${Date.now()}`;
  try {
    await fs.rename(filePath, backupPath);
    await fs.rename(tmpPath, filePath);
    try {
      await fs.rm(backupPath, { force: true });
    } catch {
      // keep backup if the platform blocks deletion
    }
  } catch (err) {
    await fs.rm(tmpPath, { force: true });
    throw err;
  }
}

async function writeJson(filePath, data) {
  const content = `${JSON.stringify(data, null, 2)}\n`;
  await safeWriteFile(filePath, content);
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) {
    return { metadata: {}, body: markdown, hasFrontmatter: false };
  }

  const metadata = {};
  for (const rawLine of match[1].split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const sep = line.indexOf(":");
    if (sep === -1) continue;

    const key = line.slice(0, sep).trim();
    const rawValue = line.slice(sep + 1).trim();
    metadata[key] = parseYamlLikeValue(rawValue);
  }

  return { metadata, body: match[2], hasFrontmatter: true };
}

function parseYamlLikeValue(value) {
  if (value === "true") return true;
  if (value === "false") return false;

  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return inner
      .split(",")
      .map((x) => x.trim())
      .map((x) => x.replace(/^['\"]|['\"]$/g, ""));
  }

  if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }

  return value;
}

function serializeFrontmatter(metadata) {
  const lines = ["---"];
  for (const [key, value] of Object.entries(metadata)) {
    lines.push(`${key}: ${serializeYamlLikeValue(value)}`);
  }
  lines.push("---");
  return `${lines.join("\n")}\n`;
}

function serializeYamlLikeValue(value) {
  if (Array.isArray(value)) {
    const rendered = value.map((v) => quoteIfNeeded(String(v))).join(", ");
    return `[${rendered}]`;
  }
  if (typeof value === "boolean") return value ? "true" : "false";
  return quoteIfNeeded(String(value));
}

function quoteIfNeeded(value) {
  if (/^[A-Za-z0-9_.\/-]+$/.test(value)) return value;
  return `\"${value.replace(/\"/g, '\\\"')}\"`;
}

function readCsvGlossary(csvText) {
  const lines = csvText
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  if (lines.length <= 1) return [];
  const pairs = [];

  for (let i = 1; i < lines.length; i += 1) {
    const idx = lines[i].indexOf(",");
    if (idx === -1) continue;
    const zh = lines[i].slice(0, idx).trim();
    const en = lines[i].slice(idx + 1).trim();
    if (zh && en) pairs.push([zh, en]);
  }

  return pairs;
}

function formatTemplate(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ""));
}

function inferTitleKey(fileName, title) {
  const lowerName = fileName.toLowerCase();
  if (lowerName.includes("paper_report") || /文献阅读笔记|论文阅读笔记|paper\s*report/i.test(title)) {
    return "literature_note";
  }
  if (/notes|学习笔记|课程/.test(title)) {
    return "course_note";
  }
  return "";
}

function normalizeArray(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}

function replaceByGlossary(text, glossary) {
  let result = text;
  for (const [zh, en] of glossary) {
    result = result.split(zh).join(en);
  }
  return result;
}

function splitMarkdownBlocks(text) {
  return text.split(/\n\s*\n/g);
}

async function maybeTranslateWithOpenAI(text, glossary) {
  if (!text.trim()) return text;
  if (TRANSLATOR !== "openai") return null;
  if (!OPENAI_API_KEY) {
    throw new Error("I18N_TRANSLATOR=openai but OPENAI_API_KEY is missing");
  }

  const glossaryText = glossary.map(([zh, en]) => `${zh} => ${en}`).join("\n");
  const prompt = [
    "Translate the following Markdown content from Chinese to English.",
    "Keep Markdown structure unchanged.",
    "Do not translate code fences, inline code, URLs, image links, or LaTeX formulas.",
    "Use terminology strictly from this glossary when applicable:",
    glossaryText || "(none)",
    "Output only the translated Markdown.",
    "---",
    text,
  ].join("\n");

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      temperature: 0.1,
      input: prompt,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`OpenAI API error: ${response.status} ${errText}`);
  }

  const json = await response.json();
  const translated = json.output_text;
  if (!translated || typeof translated !== "string") {
    throw new Error("OpenAI API returned empty output_text");
  }

  return translated.trim();
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function run() {
  await ensureDir(I18N_DIR);
  await ensureDir(TARGET_DIR);

  const phrases = await readJson(PHRASES_FILE, { titleTemplates: {}, tagMap: {} });
  const cache = await readJson(CACHE_FILE, {});
  const tm = await readJson(TM_FILE, {});

  let glossaryCsv = "zh,en\n";
  try {
    glossaryCsv = await fs.readFile(GLOSSARY_FILE, "utf8");
  } catch {
    // ignore missing glossary
  }
  const glossary = readCsvGlossary(glossaryCsv);

  const files = (await fs.readdir(SOURCE_DIR)).filter((f) => f.endsWith(".md"));

  let writtenCount = 0;
  let skippedCount = 0;
  let fixedFrontmatterCount = 0;

  for (const fileName of files) {
    const sourcePath = path.join(SOURCE_DIR, fileName);
    const targetPath = path.join(TARGET_DIR, fileName);

    const sourceRaw = await fs.readFile(sourcePath, "utf8");
    const sourceHash = sha256(sourceRaw);

    if (!FORCE && !FIX_FRONTMATTER && cache[fileName]?.sourceHash === sourceHash) {
      skippedCount += 1;
      continue;
    }

    const sourceParsed = parseFrontmatter(sourceRaw);
    const sourceMeta = { ...sourceParsed.metadata };
    const sourceBody = sourceParsed.body;

    const fileStem = fileName.replace(/\.md$/i, "");
    const inferredTitleKey = inferTitleKey(fileName, String(sourceMeta.title || ""));

    let shouldRewriteSource = false;
    if (!sourceMeta.post_id) {
      sourceMeta.post_id = fileStem;
      shouldRewriteSource = true;
    }
    if (!sourceMeta.title_key && inferredTitleKey) {
      sourceMeta.title_key = inferredTitleKey;
      shouldRewriteSource = true;
    }

    if (FIX_FRONTMATTER && shouldRewriteSource) {
      const normalizedSource = `${serializeFrontmatter(sourceMeta)}\n${sourceBody.trimStart()}\n`;
      await safeWriteFile(sourcePath, normalizedSource);
      fixedFrontmatterCount += 1;
    }

    let existingEnMeta = {};
    let existingEnBody = "";

    try {
      const existingEnRaw = await fs.readFile(targetPath, "utf8");
      const parsed = parseFrontmatter(existingEnRaw);
      existingEnMeta = parsed.metadata;
      existingEnBody = parsed.body;
    } catch {
      // no existing translation
    }

    const postDate = String(sourceMeta.date || "");
    const titleKey = String(sourceMeta.title_key || inferredTitleKey || "");

    let translatedTitle = "";
    const titleTemplate = phrases.titleTemplates?.[titleKey]?.en;
    if (titleTemplate) {
      translatedTitle = formatTemplate(titleTemplate, {
        date: postDate,
      });
    } else if (typeof existingEnMeta.title === "string" && existingEnMeta.title.trim()) {
      translatedTitle = existingEnMeta.title.trim();
    } else {
      translatedTitle = replaceByGlossary(String(sourceMeta.title || ""), glossary);
    }

    const sourceTags = normalizeArray(sourceMeta.tags);
    const translatedTags = sourceTags.map((tag) => {
      for (const [key, value] of Object.entries(phrases.tagMap || {})) {
        if (tag === key || tag === value?.zh || tag === value?.en) {
          return value.en || key;
        }
      }
      return replaceByGlossary(tag, glossary);
    });

    const blocks = splitMarkdownBlocks(sourceBody);
    const translatedBlocks = [];

    for (const block of blocks) {
      const cleaned = block.trim();
      if (!cleaned) {
        translatedBlocks.push(block);
        continue;
      }

      const key = sha256(cleaned);
      if (typeof tm[key] === "string") {
        translatedBlocks.push(tm[key]);
        continue;
      }

      let translated = null;
      try {
        translated = await maybeTranslateWithOpenAI(cleaned, glossary);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(`[warn] ${fileName} OpenAI translation failed: ${message}`);
      }

      if (!translated) {
        translated = replaceByGlossary(cleaned, glossary);
      }

      tm[key] = translated;
      translatedBlocks.push(translated);
    }

    let translatedBody = translatedBlocks.join("\n\n");

    if (TRANSLATOR === "none" && existingEnBody.trim()) {
      translatedBody = existingEnBody.trim();
    }

    const generatedMeta = {
      layout: String(sourceMeta.layout || "post"),
      title: translatedTitle || String(sourceMeta.title || "Untitled"),
      date: postDate,
      tags: translatedTags,
      comments: sourceMeta.comments === false ? false : true,
      author: String(sourceMeta.author || "junedrinleng"),
      toc: sourceMeta.toc === false ? false : true,
      post_id: String(sourceMeta.post_id || fileStem),
      source_lang: "zh",
      source_title: String(sourceMeta.title || ""),
      title_key: titleKey || undefined,
      generated_by: "scripts/i18n-sync.mjs",
      generated_at: new Date().toISOString(),
      source_hash: sourceHash,
    };

    const cleanMeta = Object.fromEntries(
      Object.entries(generatedMeta).filter(([, v]) => v !== undefined && v !== ""),
    );

    const output = `${serializeFrontmatter(cleanMeta)}\n${translatedBody.trim()}\n`;
    await safeWriteFile(targetPath, output);

    cache[fileName] = {
      sourceHash,
      postId: cleanMeta.post_id,
      titleKey: cleanMeta.title_key || "",
      updatedAt: new Date().toISOString(),
    };

    writtenCount += 1;
  }

  await writeJson(CACHE_FILE, cache);
  await writeJson(TM_FILE, tm);

  console.log(`i18n sync complete: wrote ${writtenCount}, skipped ${skippedCount}, fixed frontmatter ${fixedFrontmatterCount}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});




