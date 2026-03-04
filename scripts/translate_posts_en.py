from __future__ import annotations

import argparse
import re
import time
from pathlib import Path
from typing import List

from deep_translator import GoogleTranslator, MyMemoryTranslator

SRC_DIR = Path("src/posts")
DST_DIR = Path("src/posts-en")

google_translator = GoogleTranslator(source="auto", target="en")
memory_translator = MyMemoryTranslator(source="zh-CN", target="en-US")
failed_chunks: List[str] = []


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Translate posts markdown files to English.")
    parser.add_argument(
        "--only-untranslated",
        action="store_true",
        help="Only process files whose destination in src/posts-en still contains Chinese characters.",
    )
    return parser.parse_args()


def contains_cjk(text: str) -> bool:
    return re.search(r"[\u4e00-\u9fff]", text) is not None


def get_files_to_process(only_untranslated: bool) -> List[Path]:
    files = sorted(SRC_DIR.glob("*.md"))
    if not only_untranslated:
        return files

    selected: List[Path] = []
    for src_file in files:
        dst_file = DST_DIR / src_file.name
        if not dst_file.exists():
            selected.append(src_file)
            continue
        dst_text = dst_file.read_text(encoding="utf-8")
        if contains_cjk(dst_text):
            selected.append(src_file)
    return selected


def split_markdown_blocks(text: str) -> List[tuple[bool, str]]:
    """Split markdown into translatable text blocks and fenced code blocks.
    Returns list of tuples: (is_code, content).
    """
    parts: List[tuple[bool, str]] = []
    pattern = re.compile(r"(```[\s\S]*?```)", re.MULTILINE)
    last = 0
    for m in pattern.finditer(text):
        if m.start() > last:
            parts.append((False, text[last:m.start()]))
        parts.append((True, m.group(1)))
        last = m.end()
    if last < len(text):
        parts.append((False, text[last:]))
    return parts


def chunk_text(text: str, max_chars: int = 500) -> List[str]:
    if not text.strip():
        return [text]

    paragraphs = re.split(r"(\n\s*\n)", text)
    chunks: List[str] = []
    current = ""

    for p in paragraphs:
        if len(current) + len(p) <= max_chars:
            current += p
        else:
            if current:
                chunks.append(current)
            if len(p) <= max_chars:
                current = p
            else:
                # Hard split long paragraph
                for i in range(0, len(p), max_chars):
                    sub = p[i:i + max_chars]
                    if len(sub) == max_chars:
                        chunks.append(sub)
                    else:
                        current = sub
    if current:
        chunks.append(current)
    return chunks if chunks else [text]


def translate_text_block(block: str) -> str:
    if not block.strip():
        return block

    translated_chunks: List[str] = []
    for chunk in chunk_text(block):
        if not chunk.strip():
            translated_chunks.append(chunk)
            continue
        translated_chunks.append(translate_chunk_with_fallback(chunk))
    return "".join(translated_chunks)


def translate_chunk_with_fallback(chunk: str) -> str:
    # Retry Google translator first
    for attempt in range(3):
        try:
            return google_translator.translate(chunk)
        except Exception:
            if attempt < 2:
                time.sleep(0.8 * (attempt + 1))

    # Fallback to MyMemory translator
    for attempt in range(3):
        try:
            return memory_translator.translate(chunk)
        except Exception:
            if attempt < 2:
                time.sleep(0.8 * (attempt + 1))

    # If still failing, split into smaller segments for MyMemory limits
    pieces = [chunk[i:i + 450] for i in range(0, len(chunk), 450)]
    translated_pieces: List[str] = []
    piece_failed = False
    for piece in pieces:
        if not piece.strip():
            translated_pieces.append(piece)
            continue
        try:
            translated_pieces.append(memory_translator.translate(piece))
        except Exception:
            piece_failed = True
            translated_pieces.append(piece)

    if not piece_failed:
        return "".join(translated_pieces)

    preview = chunk.strip().replace("\n", " ")[:120]
    failed_chunks.append(preview)
    return chunk


def translate_markdown(text: str) -> str:
    output: List[str] = []
    for is_code, content in split_markdown_blocks(text):
        if is_code:
            output.append(content)
        else:
            output.append(translate_text_block(content))
    return "".join(output)


def main() -> None:
    args = parse_args()
    DST_DIR.mkdir(parents=True, exist_ok=True)
    files = get_files_to_process(args.only_untranslated)

    if not files:
        if args.only_untranslated:
            print("No untranslated markdown files found in src/posts-en")
        else:
            print("No markdown files found in src/posts")
        return

    for idx, src_file in enumerate(files, start=1):
        text = src_file.read_text(encoding="utf-8")
        translated = translate_markdown(text)
        dst_file = DST_DIR / src_file.name
        dst_file.write_text(translated, encoding="utf-8")
        print(f"[{idx}/{len(files)}] Translated -> {dst_file}")

    print(f"Done. Translated {len(files)} files.")
    if failed_chunks:
        print(f"Warning: {len(failed_chunks)} text chunks failed and were kept as original text.")
        for sample in failed_chunks[:20]:
            print(f"  - {sample}")


if __name__ == "__main__":
    main()
