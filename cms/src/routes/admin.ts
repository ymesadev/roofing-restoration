import { Router, Request, Response } from 'express';
import db from '../db/connection';
import slugify from 'slugify';

const router = Router();

// GET /api/admin/articles - all articles including drafts
router.get('/articles', (req: Request, res: Response) => {
  const articles = db.prepare(
    'SELECT id, slug, title, excerpt, date, category, featured, featured_image, status, created_at, updated_at FROM articles ORDER BY updated_at DESC'
  ).all();
  res.json(articles);
});

// GET /api/admin/articles/:id - single article by ID
router.get('/articles/:id', (req: Request, res: Response) => {
  const article = db.prepare('SELECT * FROM articles WHERE id = ?').get(req.params.id);

  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }

  const parsed = article as any;
  try {
    parsed.content = JSON.parse(parsed.content);
  } catch {
    parsed.content = [];
  }

  res.json(parsed);
});

// POST /api/admin/articles - create article
router.post('/articles', (req: Request, res: Response) => {
  const {
    title, slug: customSlug, excerpt, date, published_at, read_time, category,
    featured, featured_image, seo_title, seo_description, author_name, author_title, author_bio,
    content, status
  } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const slug = customSlug || slugify(title, { lower: true, strict: true });
  const contentJson = typeof content === 'string' ? content : JSON.stringify(content || []);

  try {
    const result = db.prepare(`
      INSERT INTO articles (slug, title, excerpt, date, published_at, read_time, category, featured, featured_image, seo_title, seo_description, author_name, author_title, author_bio, content, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      slug, title, excerpt || '', date || '', published_at || new Date().toISOString(),
      read_time || '', category || '', featured ? 1 : 0, featured_image || '',
      seo_title || `${title} | Florida Roof Restore`, seo_description || excerpt || '',
      author_name || '', author_title || '', author_bio || '',
      contentJson, status || 'draft'
    );

    const article = db.prepare('SELECT * FROM articles WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json(article);
  } catch (err: any) {
    if (err.message?.includes('UNIQUE constraint failed')) {
      return res.status(409).json({ error: 'An article with this slug already exists' });
    }
    return res.status(500).json({ error: err.message });
  }
});

// PUT /api/admin/articles/:id - update article
router.put('/articles/:id', (req: Request, res: Response) => {
  const existing = db.prepare('SELECT * FROM articles WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Article not found' });
  }

  const {
    title, slug, excerpt, date, published_at, read_time, category,
    featured, featured_image, seo_title, seo_description, author_name, author_title, author_bio,
    content, status
  } = req.body;

  const contentJson = content !== undefined
    ? (typeof content === 'string' ? content : JSON.stringify(content))
    : (existing as any).content;

  try {
    db.prepare(`
      UPDATE articles SET
        slug = ?, title = ?, excerpt = ?, date = ?, published_at = ?, read_time = ?,
        category = ?, featured = ?, featured_image = ?, seo_title = ?, seo_description = ?,
        author_name = ?, author_title = ?, author_bio = ?,
        content = ?, status = ?, updated_at = datetime('now')
      WHERE id = ?
    `).run(
      slug ?? (existing as any).slug,
      title ?? (existing as any).title,
      excerpt ?? (existing as any).excerpt,
      date ?? (existing as any).date,
      published_at ?? (existing as any).published_at,
      read_time ?? (existing as any).read_time,
      category ?? (existing as any).category,
      featured !== undefined ? (featured ? 1 : 0) : (existing as any).featured,
      featured_image ?? (existing as any).featured_image,
      seo_title ?? (existing as any).seo_title,
      seo_description ?? (existing as any).seo_description,
      author_name ?? (existing as any).author_name,
      author_title ?? (existing as any).author_title,
      author_bio ?? (existing as any).author_bio,
      contentJson,
      status ?? (existing as any).status,
      req.params.id
    );

    const updated = db.prepare('SELECT * FROM articles WHERE id = ?').get(req.params.id);
    const parsed = updated as any;
    try { parsed.content = JSON.parse(parsed.content); } catch { parsed.content = []; }
    res.json(parsed);
  } catch (err: any) {
    if (err.message?.includes('UNIQUE constraint failed')) {
      return res.status(409).json({ error: 'An article with this slug already exists' });
    }
    return res.status(500).json({ error: err.message });
  }
});

// DELETE /api/admin/articles/:id - delete article
router.delete('/articles/:id', (req: Request, res: Response) => {
  const existing = db.prepare('SELECT id FROM articles WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Article not found' });
  }

  db.prepare('DELETE FROM articles WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

export default router;
