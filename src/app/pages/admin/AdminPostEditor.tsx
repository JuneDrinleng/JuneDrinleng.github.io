/**
 * AdminPostEditor – handles both "new post" and "edit post".
 * When `lang` + `slug` route params are present → edit mode.
 * Otherwise → new post mode.
 */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  Loader2, AlertCircle, CheckCircle2, X, Eye, EyeOff,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Badge } from '@/app/components/ui/badge';
import { Switch } from '@/app/components/ui/switch';
import { Separator } from '@/app/components/ui/separator';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import {
  Card, CardContent, CardHeader, CardTitle, CardDescription,
} from '@/app/components/ui/card';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/app/components/ui/select';
import { getAllPosts } from '@/app/utils/posts';
import { getToken, postFilePath, buildSlug, buildPostContent } from './lib/auth';
import { githubGetFile, githubPutFile } from './lib/github';

type Lang = 'zh' | 'en';

interface FormState {
  title: string;
  date: string;
  lang: Lang;
  tags: string[];
  tagInput: string;
  comments: boolean;
  toc: boolean;
  body: string;
}

const TODAY = new Date().toISOString().slice(0, 10);

export default function AdminPostEditor() {
  const { lang: paramLang, slug: paramSlug } = useParams<{ lang: string; slug: string }>();
  const isEdit = !!(paramLang && paramSlug);
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    title: '', date: TODAY, lang: (paramLang as Lang) ?? 'zh',
    tags: [], tagInput: '', comments: true, toc: true, body: '',
  });
  const [fileSha, setFileSha] = useState<string | undefined>();
  const [loadingPost, setLoadingPost] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: 'error' | 'success'; msg: string } | null>(null);
  const [previewTab, setPreviewTab] = useState<'write' | 'preview'>('write');

  // Edit mode: load existing post
  useEffect(() => {
    if (!isEdit) return;
    const token = getToken();
    if (!token) { navigate('/dashboard/login'); return; }

    // Try to load from local cache first (fast)
    const cached = getAllPosts(paramLang as Lang).find(p => p.slug === paramSlug);
    if (cached) {
      const tags = cached.metadata.tags ?? [];
      const bodyRaw = cached.content + (cached.excerpt ? `${cached.excerpt}\n\n<!-- more -->\n\n${cached.content}` : cached.content);
      setForm(f => ({
        ...f,
        title: cached.metadata.title ?? '',
        date: cached.metadata.date ?? TODAY,
        lang: paramLang as Lang,
        tags,
        comments: cached.metadata.comments ?? true,
        toc: cached.metadata.toc ?? true,
        body: cached.content,
      }));
    }

    // Fetch actual file from GitHub (authoritative)
    const path = postFilePath(paramLang as Lang, paramSlug!);
    githubGetFile(token, path)
      .then(({ content, sha }) => {
        setFileSha(sha);
        // Extract frontmatter and body from raw markdown
        const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
        if (!match) return;
        const [, fm, body] = match;
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
        setForm(f => ({
          ...f,
          title: parsed.title ?? f.title,
          date: parsed.date ?? f.date,
          comments: parsed.comments !== 'false',
          toc: parsed.toc !== 'false',
          tags,
          body: body.trimStart(),
        }));
      })
      .catch(() => {}) // graceful – cached data is still shown
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

  const derivedSlug = buildSlug(form.date, form.title);
  const targetPath = isEdit
    ? postFilePath(paramLang as Lang, paramSlug!)
    : postFilePath(form.lang, derivedSlug);

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
        body: form.body,
      });
      const message = isEdit
        ? `Update post: ${form.title}`
        : `Add post: ${form.title}`;
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
            {form.title && !isEdit && (
              <p className="text-xs text-muted-foreground font-mono">
                → {targetPath}
              </p>
            )}
          </div>

          {/* Body editor with write/preview tabs */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label>正文</Label>
              <Tabs value={previewTab} onValueChange={v => setPreviewTab(v as 'write' | 'preview')}>
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
            {previewTab === 'write' ? (
              <Textarea
                value={form.body}
                onChange={e => set('body', e.target.value)}
                placeholder={'在这里书写 Markdown 正文…\n\n用 <!-- more --> 分隔摘要与全文\n\n支持 KaTeX 数学公式：$E=mc^2$'}
                className="min-h-[460px] font-mono text-sm resize-y leading-relaxed"
              />
            ) : (
              <div className="min-h-[460px] rounded-md border bg-muted/30 p-4 text-sm overflow-auto whitespace-pre-wrap font-mono text-muted-foreground">
                {form.body || <span className="italic">（无内容）</span>}
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

          {/* Tags */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">标签</CardTitle>
              <CardDescription className="text-xs">按 Enter 或逗号添加</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                value={form.tagInput}
                onChange={e => set('tagInput', e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ',') {
                    e.preventDefault();
                    addTag();
                  }
                }}
                onBlur={addTag}
                placeholder="输入标签…"
                className="h-8 text-sm"
              />
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
