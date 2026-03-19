import { useState } from 'react';
import { Link } from 'react-router';
import { Plus, Search, MoreHorizontal, Pencil, Trash2, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/app/components/ui/table';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/app/components/ui/alert-dialog';
import { getAllPosts, type Post } from '@/app/utils/posts';
import { getToken, postFilePath } from './lib/auth';
import { githubGetFile, githubDeleteFile } from './lib/github';

type Lang = 'zh' | 'en';
type PostRow = Post & { lang: Lang };

export default function AdminPosts() {
  const [lang, setLang] = useState<'all' | Lang>('all');
  const [query, setQuery] = useState('');
  const [deleting, setDeleting] = useState<PostRow | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const zh: PostRow[] = getAllPosts('zh').map(p => ({ ...p, lang: 'zh' }));
  const en: PostRow[] = getAllPosts('en').map(p => ({ ...p, lang: 'en' }));
  const all = [...zh, ...en].sort(
    (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  );

  const filtered = all
    .filter(p => lang === 'all' || p.lang === lang)
    .filter(p => {
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        p.metadata.title?.toLowerCase().includes(q) ||
        p.slug.includes(q) ||
        (p.metadata.tags ?? []).some(t => t.toLowerCase().includes(q))
      );
    });

  async function confirmDelete() {
    if (!deleting) return;
    setDeleteLoading(true);
    try {
      const token = getToken()!;
      const path = postFilePath(deleting.lang, deleting.slug);
      const { sha } = await githubGetFile(token, path);
      await githubDeleteFile(token, path, sha, `Delete post: ${deleting.metadata.title}`);
      setDeleting(null);
      // Note: post list is build-time data; page refresh after GitHub Actions rebuild will reflect changes
      alert('已删除。GitHub Actions 将自动重新构建博客。');
    } catch (err: any) {
      alert(`删除失败：${err.message}`);
    } finally {
      setDeleteLoading(false);
    }
  }

  return (
    <div className="p-6 space-y-4 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">文章</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            共 {all.length} 篇 · 中文 {zh.length} · 英文 {en.length}
          </p>
        </div>
        <Button asChild>
          <Link to="/dashboard/posts/new">
            <Plus className="w-4 h-4 mr-2" />
            新建文章
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Tabs value={lang} onValueChange={v => setLang(v as typeof lang)}>
          <TabsList>
            <TabsTrigger value="all">全部 ({all.length})</TabsTrigger>
            <TabsTrigger value="zh">中文 ({zh.length})</TabsTrigger>
            <TabsTrigger value="en">English ({en.length})</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="搜索标题、slug 或标签…"
            className="pl-8"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[45%]">标题</TableHead>
              <TableHead className="w-28">日期</TableHead>
              <TableHead className="w-20">语言</TableHead>
              <TableHead>标签</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  没有找到匹配的文章
                </TableCell>
              </TableRow>
            )}
            {filtered.map(post => (
              <TableRow key={`${post.lang}-${post.slug}`} className="group">
                <TableCell>
                  <div>
                    <p className="font-medium text-sm">{post.metadata.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 font-mono">{post.slug}</p>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground tabular-nums">
                  {post.metadata.date}
                </TableCell>
                <TableCell>
                  <Badge variant={post.lang === 'zh' ? 'default' : 'secondary'} className="text-xs">
                    {post.lang === 'zh' ? '中文' : 'EN'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {(post.metadata.tags ?? []).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 transition-opacity">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">操作</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem asChild>
                        <Link to={`/dashboard/posts/${post.lang}/${post.slug}/edit`}>
                          <Pencil className="h-4 w-4 mr-2" />
                          编辑
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          查看
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-destructive focus:text-destructive"
                        onClick={() => setDeleting(post)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        删除
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Delete confirm dialog */}
      <AlertDialog open={!!deleting} onOpenChange={open => !open && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确认删除</AlertDialogTitle>
            <AlertDialogDescription>
              将从 GitHub 仓库中删除文件{' '}
              <code className="text-xs bg-muted px-1 py-0.5 rounded">
                {deleting ? postFilePath(deleting.lang, deleting.slug) : ''}
              </code>
              。此操作不可撤销，博客将在下次构建后更新。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleteLoading}>取消</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              disabled={deleteLoading}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleteLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              确认删除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
