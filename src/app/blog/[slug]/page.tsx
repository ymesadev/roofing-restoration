import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlockRenderer from '@/components/blog/BlockRenderer';

const CMS_API = process.env.CMS_API_URL || 'http://localhost:3001';

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read_time: string;
  category: string;
  featured_image: string;
  seo_title: string;
  seo_description: string;
  author_name: string;
  author_title: string;
  author_bio: string;
  content: any[];
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(`${CMS_API}/api/articles/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: article.seo_title || `${article.title} | Florida Roof Restore`,
    description: article.seo_description || article.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const authorDisplay = article.author_name && article.author_title
    ? `By ${article.author_name}, ${article.author_title}`
    : article.author_name
      ? `By ${article.author_name}`
      : '';

  return (
    <article>
      {/* Header */}
      <header className="bg-slate-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-orange-400 hover:text-orange-300 text-sm font-medium mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <span className="text-gray-400 text-sm">{article.read_time}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400">
            <span>{article.date}</span>
            {authorDisplay && (
              <>
                <span>•</span>
                <span>{authorDisplay}</span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {article.featured_image && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <img
            src={`${CMS_API}${article.featured_image}`}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      )}

      {/* Content */}
      <div className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <BlockRenderer blocks={article.content || []} />
          </div>

          {/* Author */}
          {article.author_name && (
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{article.author_name}</h4>
                  {article.author_bio && (
                    <p className="text-gray-600 text-sm">{article.author_bio}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
