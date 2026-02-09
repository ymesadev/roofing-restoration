import { Router, Request, Response } from 'express';
import db from '../db/connection';

const router = Router();

// GET /api/articles - list published articles (metadata only)
router.get('/', (req: Request, res: Response) => {
  const { category, featured, limit = '50', offset = '0' } = req.query;

  let query = 'SELECT id, slug, title, excerpt, date, published_at, read_time, category, featured, featured_image, author_name, author_title FROM articles WHERE status = ?';
  const params: any[] = ['published'];

  if (category) {
    query += ' AND category = ?';
    params.push(category);
  }

  if (featured !== undefined) {
    query += ' AND featured = ?';
    params.push(featured === 'true' ? 1 : 0);
  }

  query += ' ORDER BY published_at DESC LIMIT ? OFFSET ?';
  params.push(Number(limit), Number(offset));

  const articles = db.prepare(query).all(...params);
  res.json(articles);
});

// GET /api/articles/:slug - single article with full content
router.get('/:slug', (req: Request, res: Response) => {
  const article = db.prepare(
    'SELECT * FROM articles WHERE slug = ? AND status = ?'
  ).get(req.params.slug, 'published');

  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }

  // Parse content JSON
  const parsed = article as any;
  try {
    parsed.content = JSON.parse(parsed.content);
  } catch {
    parsed.content = [];
  }

  res.json(parsed);
});

export default router;
