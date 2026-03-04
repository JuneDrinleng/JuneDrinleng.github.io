import { useEffect, useRef } from 'react';
import 'gitalk/dist/gitalk.css';
import '../../styles/gitalk-overrides.css';
import Gitalk from 'gitalk';

interface GitalkCommentsProps {
  slug: string;
  title: string;
}

export default function GitalkComments({ slug, title }: GitalkCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // Clear previous content
    containerRef.current.innerHTML = '';

    const gitalk = new Gitalk({
      clientID: 'Ov23liBV8LIk7mawtLQD',
      clientSecret: 'a14fa3a0cc6e64de0801aeca055edf9e541cf56e',
      repo: 'JuneDrinleng.github.io',
      owner: 'JuneDrinleng',
      admin: ['JuneDrinleng'],
      id: slug.slice(0, 50),
      distractionFreeMode: false,
      title: title,
      language: 'zh-CN',
    });

    gitalk.render(containerRef.current);
  }, [slug, title]);

  return (
    <section className="mt-12 pt-8 border-t-2 border-black">
      <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">评论</h2>
      <div ref={containerRef} className="gitalk-container" />
    </section>
  );
}
