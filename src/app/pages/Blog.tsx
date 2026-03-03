import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router';
import { getAllPosts } from '../utils/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">返回导航</span>
          </Link>
          <div className="text-center mt-8">
            <h1 className="text-5xl font-bold uppercase tracking-tight mb-2">博客</h1>
            <p className="text-sm uppercase tracking-widest opacity-60">Technical Writing & Thoughts</p>
          </div>
        </div>
      </header>

      {/* Blog Posts List */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-2 border-black p-8 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="mb-4">
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-3xl font-bold uppercase tracking-tight mb-3 hover:opacity-60 transition-opacity">
                    {post.metadata.title}
                  </h2>
                </Link>
                <div className="flex flex-wrap items-center gap-4 text-sm opacity-60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.metadata.date}>
                      {new Date(post.metadata.date).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  {post.metadata.tags && post.metadata.tags.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      <div className="flex gap-2">
                        {post.metadata.tags.map((tag) => (
                          <span key={tag} className="border border-black px-2 py-0.5 text-xs uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="prose prose-lg mb-6 opacity-80 leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.excerpt}</ReactMarkdown>
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors uppercase tracking-wider text-sm font-bold"
              >
                阅读全文 →
              </Link>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-sm uppercase tracking-wider opacity-60">
            © 2026 技术博客
          </p>
        </div>
      </footer>
    </div>
  );
}
