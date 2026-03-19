import { Link } from 'react-router';
import { FileText, Globe, Tag, Clock, Plus, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Separator } from '@/app/components/ui/separator';
import { getAllPosts } from '@/app/utils/posts';
import AdminAnalytics from './AdminAnalytics';

export default function AdminDashboard() {
  const zh = getAllPosts('zh');
  const en = getAllPosts('en');

  // Merged and sorted by date
  const all = [
    ...zh.map(p => ({ ...p, lang: 'zh' as const })),
    ...en.map(p => ({ ...p, lang: 'en' as const })),
  ].sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  const allTags = [...new Set(all.flatMap(p => Array.isArray(p.metadata.tags) ? p.metadata.tags : []))];
  const recent = all.slice(0, 6);

  const stats = [
    { label: '中文文章',  value: zh.length,       icon: FileText, desc: 'src/posts/'    },
    { label: '英文文章',  value: en.length,        icon: Globe,    desc: 'src/posts-en/' },
    { label: '标签总数',  value: allTags.length,   icon: Tag,      desc: '跨语言去重'    },
    { label: '文章总数',  value: all.length,       icon: Clock,    desc: '中文 + 英文'   },
  ];

  return (
    <div className="p-6 space-y-6 max-w-5xl">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">概览</h1>
          <p className="text-sm text-muted-foreground mt-0.5">博客内容统计与快速操作</p>
        </div>
        <Button asChild>
          <Link to="/dashboard/posts/new">
            <Plus className="w-4 h-4 mr-2" />
            新建文章
          </Link>
        </Button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
              <s.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent posts */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <div>
            <CardTitle className="text-base">最近文章</CardTitle>
            <CardDescription className="text-sm mt-0.5">按发布日期排序</CardDescription>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard/posts">
              查看全部
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </Button>
        </CardHeader>
        <Separator />
        <CardContent className="p-0">
          {recent.map((post, i) => (
            <div key={`${post.lang}-${post.slug}`}>
              <div className="flex items-center gap-3 px-6 py-3 hover:bg-muted/50 transition-colors group">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{post.metadata.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{post.slug}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-muted-foreground hidden sm:block">{post.metadata.date}</span>
                  <Badge variant={post.lang === 'zh' ? 'default' : 'secondary'} className="text-xs">
                    {post.lang === 'zh' ? '中文' : 'EN'}
                  </Badge>
                  {(Array.isArray(post.metadata.tags) ? post.metadata.tags : []).slice(0, 1).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs hidden md:flex">{tag}</Badge>
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    asChild
                  >
                    <Link to={`/dashboard/posts/${post.lang}/${post.slug}/edit`}>编辑</Link>
                  </Button>
                </div>
              </div>
              {i < recent.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tags cloud */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">所有标签</CardTitle>
          <CardDescription className="text-sm mt-0.5">共 {allTags.length} 个</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analytics */}
      <div>
        <h2 className="text-base font-semibold tracking-tight mb-3">访问统计</h2>
        <AdminAnalytics />
      </div>
    </div>
  );
}
