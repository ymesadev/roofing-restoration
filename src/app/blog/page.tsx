import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roofing Blog | Florida Roof Restore',
  description: 'Expert roofing tips, storm preparation guides, and restoration advice from Florida\'s trusted roof restoration specialists.',
};

const posts = [
  {
    slug: 'hurricane-season-2024-roof-preparation',
    title: 'Hurricane Season 2024: Essential Roof Preparation Steps Every Florida Homeowner Should Take',
    excerpt: 'With hurricane season approaching, now is the time to inspect and prepare your roof. Learn the critical steps to protect your home before the storms arrive.',
    date: 'December 28, 2025',
    readTime: '8 min read',
    category: 'Storm Preparation',
    featured: true,
  },
  {
    slug: 'signs-your-roof-needs-emergency-tarping',
    title: '7 Warning Signs Your Roof Needs Emergency Tarping After a Storm',
    excerpt: 'Not all roof damage is obvious. Learn to identify the subtle and not-so-subtle signs that your roof needs immediate protection to prevent costly water damage.',
    date: 'December 15, 2025',
    readTime: '6 min read',
    category: 'Emergency Response',
    featured: false,
  },
  {
    slug: 'florida-roof-insurance-claims-guide',
    title: 'The Complete Guide to Filing Roof Insurance Claims in Florida (2025 Update)',
    excerpt: 'Navigating insurance claims after roof damage can be overwhelming. This comprehensive guide walks you through the process step-by-step to maximize your claim.',
    date: 'December 3, 2025',
    readTime: '12 min read',
    category: 'Insurance',
    featured: false,
  },
  {
    slug: 'tile-vs-shingle-roofs-florida',
    title: 'Tile vs. Shingle Roofs in Florida: Which Is Better for Storm Resistance?',
    excerpt: 'Both tile and shingle roofs are popular in Florida, but how do they compare when hurricanes hit? We break down the pros and cons of each.',
    date: 'November 19, 2025',
    readTime: '7 min read',
    category: 'Roofing Materials',
    featured: false,
  },
  {
    slug: 'roof-leak-water-damage-timeline',
    title: 'How Fast Can a Roof Leak Cause Serious Water Damage? The Timeline Every Homeowner Should Know',
    excerpt: 'A small leak might not seem urgent, but the damage timeline is faster than most homeowners realize. Learn why quick action is essential.',
    date: 'November 5, 2025',
    readTime: '5 min read',
    category: 'Maintenance',
    featured: false,
  },
  {
    slug: 'what-to-do-after-storm-damages-roof',
    title: 'What to Do in the First 24 Hours After a Storm Damages Your Roof',
    excerpt: 'The actions you take immediately after storm damage can significantly impact your insurance claim and prevent additional damage. Here\'s your action plan.',
    date: 'October 22, 2025',
    readTime: '6 min read',
    category: 'Emergency Response',
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Roofing Insights & Tips
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Expert advice on storm preparation, roof maintenance, insurance claims, and protecting your Florida home.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <span className="text-sm font-medium opacity-75">Featured Article</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-orange-500 transition">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                    <span className="text-orange-500 font-medium group-hover:underline">Read Article →</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition h-full flex flex-col">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 h-48 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-500 transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{post.date}</span>
                      <span className="text-orange-500 text-sm font-medium">Read →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Prepared for Storm Season
          </h2>
          <p className="text-gray-300 mb-8">
            Get expert roofing tips and storm preparation advice delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
