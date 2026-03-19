/**
 * AdminPostEditor – handles both "new post" and "edit post".
 * When `lang` + `slug` route params are present → edit mode.
 * Otherwise → new post mode.
 */
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import {
  Loader2, AlertCircle, CheckCircle2, X, Eye, EyeOff, ImageIcon,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Badge } from '@/app/components/ui/badge';
import { Switch } from '@/app/components/ui/switch';
import { Separator } from '@/app/components/ui/separator';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { Tabs, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import {
  Card, CardContent, CardHeader, CardTitle, CardDescription,
} from '@/app/components/ui/card';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/app/components/ui/select';
import { getAllPosts } from '@/app/utils/posts';
import { getToken, postFilePath, buildSlug, buildPostContent } from './lib/auth';
import { githubGetFile, githubPutFile, githubUploadImage } from './lib/github';

type Lang = 'zh' | 'en';

interface FormState {
  title: string;
  slug: string;
  date: string;
  lang: Lang;
  tags: string[];
  tagInput: string;
  comments: boolean;
  toc: boolean;
  excerpt: string;
  body: string;
}

const TODAY = new Date().toISOString().slice(0, 10);

function readFileAsBase64(file: File): Promise<{ base64: string; dataUrl: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      resolve({ base64: dataUrl.split(',')[1], dataUrl });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function AdminPostEditor() {
  const { lang: paramLang, slug: paramSlug } = useParams<{ lang: string; slug: string }>();
  const isEdit = !!(paramLang && paramSlug);
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    title: '', slug: '', date: TODAY, lang: (paramLang as Lang) ?? 'zh',
    tags: [], tagInput: '', comments: true, toc: true, excerpt: '', body: '',
  });
  const [fileSha, setFileSha] = useState<string | undefined>();
  const [loadingPost, setLoadingPost] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: 'error' | 'success'; msg: string } | null>(null);
  const [excerptTab, setExcerptTab] = useState<'write' | 'preview'>('write');
  const [bodyTab, setBodyTab] = useState<'write' | 'preview'>('write');

  // Image upload state
  const [imgPreview, setImgPreview] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imgUploading, setImgUploading] = useState(false);
  const [imgError, setImgError] = useState('');

  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Edit mode: load existing post
  useEffect(() => {
    if (!isEdit) return;
    const token = getToken();
    if (!token) { navigate('/dashboard/login'); return; }

    const cached = getAllPosts(paramLang as Lang).find(p => p.slug === paramSlug);
    if (cached) {
      const tags = Array.isArray(cached.metadata.tags) ? cached.metadata.tags : [];
      setForm(f => ({
        ...f,
        title: cached.metadata.title ?? '',
        date: cached.metadata.date ?? TODAY,
        lang: paramLang as Lang,
        tags,
        comments: cached.metadata.comments ?? true,
        toc: cached.metadata.toc ?? true,
        excerpt: cached.excerpt,
        body: cached.content,
      }));
    }

    const path = postFilePath(paramLang as Lang, paramSlug!);
    githubGetFile(token, path)
      .then(({ content, sha }) => {
        setFileSha(sha);
        const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
        if (!match) return;
        const [, fm, rawBody] = match;
        const parsed: Record<string, string> = {};
        fm.split('\n').forEach(line => {
          const idx = line.indexOf(':');
          if (idx === -1) return;
          parsed[line.slice(0, idx).trim()] = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
        });
        const tagsMatch = fm.match(/tags:\s*\[([^\]]*)\]/);
        const tags = tagsMatch
          ? tagsMatch[1].split(',').map(t => t.trim()).filter(Boolean)
          : [];
        const parts = rawBody.trimStart().split(/<!--\s*more\s*-->/);
        const excerpt = parts.length > 1 ? parts[0].trim() : '';
        const body = parts.length > 1 ? parts[1].trim() : parts[0].trim();
        setForm(f => ({
          ...f,
          title: parsed.title ?? f.title,
          date: parsed.date ?? f.date,
          comments: parsed.comments !== 'false',
          toc: parsed.toc !== 'false',
          tags,
          excerpt,
          body,
        }));
      })
      .catch(() => {})
      .finally(() => setLoadingPost(false));
  }, []);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm(f => ({ ...f, [key]: value }));
  }

  function addTag() {
    const t = form.tagInput.trim().replace(/,$/, '');
    if (t && !form.tags.includes(t)) set('tags', [...form.tags, t]);
    set('tagInput', '');
  }

  function removeTag(tag: string) {
    set('tags', form.tags.filter(t => t !== tag));
  }

  // Collect all existing tags across all posts for autocomplete
  const allExistingTags = [...new Set([
    ...getAllPosts('zh').flatMap(p => Array.isArray(p.metadata.tags) ? p.metadata.tags : []),
    ...getAllPosts('en').flatMap(p => Array.isArray(p.metadata.tags) ? p.metadata.tags : []),
  ])].sort();

  const tagSuggestions = form.tagInput.trim()
    ? allExistingTags.filter(t =>
        t.toLowerCase().includes(form.tagInput.toLowerCase()) && !form.tags.includes(t),
      )
    : [];

  const [tagDropdownOpen, setTagDropdownOpen] = useState(false);

  const targetPath = isEdit
    ? postFilePath(paramLang as Lang, paramSlug!)
    : postFilePath(form.lang, form.slug || buildSlug(form.date, form.title));

  // ── Image upload helpers ──────────────────────────────────────────────────

  async function uploadImageFile(file: File): Promise<string> {
    const { base64, dataUrl } = await readFileAsBase64(file);
    setImgPreview(dataUrl);
    const ext = file.type.split('/')[1] || 'png';
    const filename = `${Date.now()}.${ext}`;
    return githubUploadImage(getToken()!, filename, base64);
  }

  async function handleImageAreaFile(file: File) {
    setImgUploading(true);
    setImgError('');
    setImgUrl('');
    try {
      const url = await uploadImageFile(file);
      setImgUrl(url);
    } catch (e: any) {
      setImgError(e.message ?? '上传失败');
      setImgPreview('');
    } finally {
      setImgUploading(false);
    }
  }

  function handleAreaPaste(e: React.ClipboardEvent) {
    const file = Array.from(e.clipboardData.items)
      .find(item => item.type.startsWith('image/'))
      ?.getAsFile();
    if (file) handleImageAreaFile(file);
  }

  function insertImageAtCursor(url: string) {
    const ta = bodyRef.current;
    const md = `![](${url})`;
    const pos = ta ? ta.selectionStart : form.body.length;
    const newBody = form.body.slice(0, pos) + md + form.body.slice(pos);
    set('body', newBody);
    requestAnimationFrame(() => {
      if (ta) {
        ta.selectionStart = ta.selectionEnd = pos + md.length;
        ta.focus();
      }
    });
  }

  // Paste image directly in the body textarea → auto upload and insert
  async function handleBodyPaste(e: React.ClipboardEvent<HTMLTextAreaElement>) {
    const file = Array.from(e.clipboardData.items)
      .find(item => item.type.startsWith('image/'))
      ?.getAsFile();
    if (!file) return;
    e.preventDefault();
    const pos = bodyRef.current?.selectionStart ?? form.body.length;
    const placeholder = `![上传中…](uploading-${Date.now()})`;
    setForm(f => ({
      ...f,
      body: f.body.slice(0, pos) + placeholder + f.body.slice(pos),
    }));
    try {
      const { base64 } = await readFileAsBase64(file);
      const ext = file.type.split('/')[1] || 'png';
      const url = await githubUploadImage(getToken()!, `${Date.now()}.${ext}`, base64);
      setForm(f => ({ ...f, body: f.body.replace(placeholder, `![](${url})`) }));
    } catch {
      setForm(f => ({ ...f, body: f.body.replace(placeholder, '') }));
    }
  }

  // ── Markdown preview components ───────────────────────────────────────────

  const mdComponents = {
    code: ({ className, children, ...props }: any) => {
      const isInline = !className && !String(children).includes('\n');
      if (isInline) {
        return (
          <code className="bg-gray-100 border border-gray-300 px-1.5 py-0.5 text-sm font-mono rounded" {...props}>
            {children}
          </code>
        );
      }
      return <code className={className} {...props}>{children}</code>;
    },
    pre: ({ children }: any) => (
      <pre className="bg-gray-50 border border-gray-200 p-4 overflow-x-auto mb-4 font-mono text-sm rounded">
        {children}
      </pre>
    ),
  };

  async function handleSave() {
    if (!form.title.trim() || !form.body.trim()) {
      setStatus({ type: 'error', msg: '标题和正文不能为空' });
      return;
    }
    setSaving(true);
    setStatus(null);
    try {
      const token = getToken()!;
      const content = buildPostContent({
        title: form.title,
        date: form.date,
        tags: form.tags,
        comments: form.comments,
        toc: form.toc,
        excerpt: form.excerpt,
        body: form.body,
      });
      const message = isEdit ? `Update post: ${form.title}` : `Add post: ${form.title}`;
      await githubPutFile(token, targetPath, content, message, fileSha);
      setStatus({
        type: 'success',
        msg: `已${isEdit ? '更新' : '创建'} ${targetPath}，GitHub Actions 将自动重新构建。`,
      });
      if (!isEdit) {
        setTimeout(() => navigate('/dashboard/posts'), 1800);
      }
    } catch (err: any) {
      setStatus({ type: 'error', msg: err.message ?? '提交失败' });
    } finally {
      setSaving(false);
    }
  }

  if (loadingPost) {
    return (
      <div className="flex items-center justify-center h-64 gap-2 text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="text-sm">加载文章中…</span>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          {isEdit ? '编辑文章' : '新建文章'}
        </h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          {isEdit
            ? `编辑 ${targetPath}`
            : '内容通过 GitHub API 直接提交到仓库，自动触发重新构建'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        {/* ── Left: main content ── */}
        <div className="space-y-4">
          {status && (
            <Alert variant={status.type === 'error' ? 'destructive' : 'default'}>
              {status.type === 'error'
                ? <AlertCircle className="h-4 w-4" />
                : <CheckCircle2 className="h-4 w-4" />}
              <AlertDescription>{status.msg}</AlertDescription>
            </Alert>
          )}

          {/* Title */}
          <div className="space-y-1.5">
            <Label htmlFor="title">标题</Label>
            <Input
              id="title"
              value={form.title}
              onChange={e => set('title', e.target.value)}
              placeholder="文章标题…"
              className="text-base"
            />
          </div>

          {/* Slug / filename (new post only) */}
          {!isEdit && (
            <div className="space-y-1.5">
              <Label htmlFor="slug">文件名</Label>
              <Input
                id="slug"
                value={form.slug}
                onChange={e => set('slug', e.target.value.replace(/\s+/g, '-'))}
                placeholder={buildSlug(form.date, form.title) || 'YYYY-MM-DD-slug'}
                className="font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground font-mono">
                → {targetPath}
              </p>
            </div>
          )}

          {/* Excerpt */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div>
                <Label>摘要</Label>
                <span className="text-xs text-muted-foreground ml-2">显示在文章列表，可不填</span>
              </div>
              <Tabs value={excerptTab} onValueChange={v => setExcerptTab(v as 'write' | 'preview')}>
                <TabsList className="h-7">
                  <TabsTrigger value="write" className="text-xs h-6 px-2 gap-1">
                    <EyeOff className="h-3 w-3" /> 编辑
                  </TabsTrigger>
                  <TabsTrigger value="preview" className="text-xs h-6 px-2 gap-1">
                    <Eye className="h-3 w-3" /> 预览
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            {excerptTab === 'write' ? (
              <Textarea
                value={form.excerpt}
                onChange={e => set('excerpt', e.target.value)}
                placeholder="文章摘要，支持 Markdown…"
                className="min-h-[120px] font-mono text-sm resize-y leading-relaxed"
              />
            ) : (
              <div className="min-h-[120px] rounded-md border bg-background p-4 text-sm overflow-auto prose prose-sm max-w-none">
                {form.excerpt
                  ? <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={mdComponents}>{form.excerpt}</ReactMarkdown>
                  : <span className="italic text-muted-foreground">（无摘要）</span>}
              </div>
            )}
          </div>

          {/* Body */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label>正文</Label>
              <Tabs value={bodyTab} onValueChange={v => setBodyTab(v as 'write' | 'preview')}>
                <TabsList className="h-7">
                  <TabsTrigger value="write" className="text-xs h-6 px-2 gap-1">
                    <EyeOff className="h-3 w-3" /> 编辑
                  </TabsTrigger>
                  <TabsTrigger value="preview" className="text-xs h-6 px-2 gap-1">
                    <Eye className="h-3 w-3" /> 预览
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            {bodyTab === 'write' ? (
              <Textarea
                ref={bodyRef}
                value={form.body}
                onChange={e => set('body', e.target.value)}
                onPaste={handleBodyPaste}
                placeholder={'在这里书写 Markdown 正文…\n\n支持 KaTeX 数学公式：$E=mc^2$\n\n可直接粘贴图片自动上传'}
                className="min-h-[460px] font-mono text-sm resize-y leading-relaxed"
              />
            ) : (
              <div className="min-h-[460px] rounded-md border bg-background p-4 text-sm overflow-auto prose prose-sm max-w-none">
                {form.body
                  ? <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={mdComponents}>{form.body}</ReactMarkdown>
                  : <span className="italic text-muted-foreground">（无内容）</span>}
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              {form.body.length} 字符 · {form.body.split('\n').length} 行
            </p>
          </div>
        </div>

        {/* ── Right: settings sidebar ── */}
        <div className="space-y-4">
          {/* Publish settings */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">发布设置</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {!isEdit && (
                <div className="space-y-1.5">
                  <Label className="text-xs">语言</Label>
                  <Select value={form.lang} onValueChange={v => set('lang', v as Lang)}>
                    <SelectTrigger className="h-8 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zh">中文</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className="space-y-1.5">
                <Label className="text-xs">日期</Label>
                <Input
                  type="date"
                  value={form.date}
                  onChange={e => set('date', e.target.value)}
                  className="h-8 text-sm"
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <Label className="text-xs font-normal">开启评论</Label>
                <Switch
                  checked={form.comments}
                  onCheckedChange={v => set('comments', v)}
                  className="scale-90"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-xs font-normal">显示目录 TOC</Label>
                <Switch
                  checked={form.toc}
                  onCheckedChange={v => set('toc', v)}
                  className="scale-90"
                />
              </div>
              <Separator />
              <Button
                onClick={handleSave}
                disabled={saving}
                className="w-full"
                size="sm"
              >
                {saving ? (
                  <><Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" />提交中…</>
                ) : (
                  isEdit ? '保存更改' : '提交到 GitHub'
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Image upload */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">插入图片</CardTitle>
              <CardDescription className="text-xs">双击选择或粘贴图片，也可直接在正文中粘贴</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) handleImageAreaFile(file);
                  e.target.value = '';
                }}
              />
              {/* Drop / paste zone */}
              <div
                tabIndex={0}
                className="border-2 border-dashed border-border rounded-md flex flex-col items-center justify-center min-h-[100px] p-3 cursor-pointer hover:border-muted-foreground transition-colors focus:outline-none focus:border-muted-foreground"
                onDoubleClick={() => fileInputRef.current?.click()}
                onPaste={handleAreaPaste}
              >
                {imgUploading ? (
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                ) : imgPreview ? (
                  <img src={imgPreview} className="max-h-[120px] rounded object-contain" alt="preview" />
                ) : (
                  <div className="text-center space-y-1">
                    <ImageIcon className="h-6 w-6 mx-auto text-muted-foreground/40" />
                    <p className="text-xs text-muted-foreground">双击选择 · 点击后粘贴</p>
                  </div>
                )}
              </div>

              {imgError && (
                <p className="text-xs text-destructive">{imgError}</p>
              )}
              {imgUrl && !imgUploading && (
                <p className="text-xs text-muted-foreground font-mono truncate" title={imgUrl}>
                  {imgUrl.split('/').pop()}
                </p>
              )}

              <Button
                size="sm"
                variant="outline"
                className="w-full"
                disabled={!imgUrl || imgUploading}
                onClick={() => { if (imgUrl) insertImageAtCursor(imgUrl); }}
              >
                <ImageIcon className="h-3.5 w-3.5 mr-2" />
                插入到光标处
              </Button>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">标签</CardTitle>
              <CardDescription className="text-xs">按 Enter 或逗号添加</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative">
                <Input
                  value={form.tagInput}
                  onChange={e => {
                    set('tagInput', e.target.value);
                    setTagDropdownOpen(true);
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ',') {
                      e.preventDefault();
                      if (tagSuggestions.length > 0 && e.key === 'Enter') {
                        // Enter with suggestions: pick first suggestion
                        set('tags', [...form.tags, tagSuggestions[0]]);
                        set('tagInput', '');
                      } else {
                        addTag();
                      }
                      setTagDropdownOpen(false);
                    } else if (e.key === 'Escape') {
                      setTagDropdownOpen(false);
                    }
                  }}
                  onFocus={() => setTagDropdownOpen(true)}
                  onBlur={() => setTimeout(() => setTagDropdownOpen(false), 150)}
                  placeholder="输入标签…"
                  className="h-8 text-sm"
                />
                {tagDropdownOpen && tagSuggestions.length > 0 && (
                  <div className="absolute z-10 top-full mt-1 w-full rounded-md border bg-popover shadow-md overflow-hidden">
                    {tagSuggestions.map(tag => (
                      <button
                        key={tag}
                        type="button"
                        className="w-full text-left px-3 py-1.5 text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
                        onMouseDown={e => {
                          e.preventDefault(); // prevent blur before click
                          set('tags', [...form.tags, tag]);
                          set('tagInput', '');
                          setTagDropdownOpen(false);
                        }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {form.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {form.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="gap-1 pr-1">
                      <span className="text-xs">{tag}</span>
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:opacity-60 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
