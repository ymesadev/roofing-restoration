export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  published_at: string;
  read_time: string;
  category: string;
  featured: number;
  featured_image: string;
  seo_title: string;
  seo_description: string;
  author_name: string;
  author_title: string;
  author_bio: string;
  content: string;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}

export type ContentBlock =
  | { type: 'paragraph'; text: string; intro?: boolean }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; style: 'ordered' | 'unordered'; items: string[] }
  | { type: 'callout'; variant: 'warning' | 'pro-tip' | 'info'; title: string; text: string }
  | { type: 'cta'; title: string; description: string; buttons: { text: string; href: string; style: 'primary' | 'outline' }[] }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface ArticleInput {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  published_at?: string;
  read_time?: string;
  category?: string;
  featured?: number;
  featured_image?: string;
  seo_title?: string;
  seo_description?: string;
  author_name?: string;
  author_title?: string;
  author_bio?: string;
  content?: ContentBlock[];
  status?: 'draft' | 'published';
}
