'use client';

import { PageContainer } from '@/components/PageContainer';
import { SiteFooter } from '@/components/site-footer';
import { useEffect, useState } from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  author: string;
  readTime?: string;
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const posts: BlogPost[] = [
      {
        title: "The Future of Business Development: Will AI Replace Partnership Managers?",
        excerpt: "AI is revolutionizing business development (BD) —from automating outreach to identifying strategic partnerships. But will AI completely...",
        date: "7 days ago",
        url: "#",
        author: "Jaein Seo",
        readTime: "1 min read"
      },
      {
        title: "Unlocking Growth: My Experience with Strategic Partnerships at Google, Verizon, and Lemonade",
        excerpt: "Over the last decade of my career, I've led strategic partnerships at companies of all sizes and industries, including Fortune 500s like...",
        date: "Feb 23",
        url: "#",
        author: "Jaein Seo",
        readTime: "3 min read"
      },
      {
        title: "The Hidden Costs of a Bad Partnership (And How AI Can Prevent Them)",
        excerpt: "A bad partnership can do more than just slow you down—it can drain financial resources, damage your brand reputation, and set back...",
        date: "Feb 19",
        url: "#",
        author: "Jaein Seo",
        readTime: "2 min read"
      }
    ];
    
    setBlogPosts(posts);
    setIsLoading(false);
  }, []);

  return (
    <>
      <PageContainer>
        <div className="py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Partnership Intelligence Hub
          </h1>
          <p className="text-xl text-center text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl mx-auto">
            Insights and perspectives on strategic partnerships and AI-powered business development
          </p>
          
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900 dark:border-white"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white dark:bg-zinc-800/50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">
                        {post.author}
                      </div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">
                        {post.date} · {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold mt-2 mb-3 text-zinc-900 dark:text-white">
                      {post.title}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-end">
                      <a
                        href={post.url}
                        className="text-[#4A9EFF] dark:text-[#FF6B6B] hover:underline font-medium"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </PageContainer>
      <SiteFooter />
    </>
  );
} 