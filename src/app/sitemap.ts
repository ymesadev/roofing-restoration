import { MetadataRoute } from 'next';

const BASE_URL = 'https://floridaroofrestore.com';
const CMS_API = process.env.CMS_API_URL || 'http://localhost:3001';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'daily', priority: 0.9 },
    // Services
    { url: `${BASE_URL}/services/roof-tarping`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/storm-damage`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/leak-repair`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/insurance-claims`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/inspection`, changeFrequency: 'monthly', priority: 0.8 },
    // Locations
    { url: `${BASE_URL}/locations/miami`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/locations/fort-lauderdale`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/locations/tampa`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/locations/orlando`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/locations/jacksonville`, changeFrequency: 'monthly', priority: 0.7 },
    // Legal
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Dynamic blog articles from CMS
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${CMS_API}/api/articles`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const articles: { slug: string; published_at: string }[] = await res.json();
      blogPages = articles.map((article) => ({
        url: `${BASE_URL}/blog/${article.slug}`,
        lastModified: article.published_at,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
    }
  } catch {
    // CMS unavailable — return static pages only
  }

  return [...staticPages, ...blogPages];
}
