import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { getPostBySlug } from '../utils/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">文章未找到</h1>
          <Link to="/blog" className="border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-colors">
            返回博客列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link to="/blog" className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">返回博客</span>
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <header className="mb-12 pb-8 border-b-2 border-black">
          <h1 className="text-5xl font-bold uppercase tracking-tight mb-6">{post.metadata.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2 opacity-60">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.metadata.date}>
                {new Date(post.metadata.date).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            
            {post.metadata.author && (
              <div className="flex items-center gap-2 opacity-60">
                <User className="w-4 h-4" />
                <span>{post.metadata.author}</span>
              </div>
            )}
            
            {post.metadata.tags && post.metadata.tags.length > 0 && (
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 opacity-60" />
                <div className="flex gap-2">
                  {post.metadata.tags.map((tag) => (
                    <span key={tag} className="border border-black px-3 py-1 text-xs uppercase font-medium hover:bg-black hover:text-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className="text-3xl font-bold uppercase tracking-tight mt-12 mb-6 pb-3 border-b-2 border-black">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-bold uppercase tracking-tight mt-8 mb-4">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-xl font-bold uppercase tracking-tight mt-6 mb-3">
                  {children}
                </h4>
              ),
              p: ({ children }) => (
                <p className="mb-6 leading-relaxed text-lg opacity-90">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="mb-6 space-y-2 list-none">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-6 space-y-2 list-decimal list-inside">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-black mt-2.5 flex-shrink-0"></span>
                  <span className="flex-1">{children}</span>
                </li>
              ),
              code: ({ className, children, ...props }) => {
                const isInline = !className;
                if (isInline) {
                  return (
                    <code className="bg-gray-100 border border-black px-2 py-1 text-sm font-mono" {...props}>
                      {children}
                    </code>
                  );
                }
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="bg-gray-50 border-2 border-black p-6 overflow-x-auto mb-6 font-mono text-sm">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-black pl-6 my-6 italic opacity-80">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a href={href} className="border-b-2 border-black hover:bg-black hover:text-white transition-colors">
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

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
