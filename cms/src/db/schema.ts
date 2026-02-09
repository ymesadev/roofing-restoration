import db from './connection';

export function initializeSchema() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      excerpt TEXT DEFAULT '',
      date TEXT DEFAULT '',
      published_at TEXT DEFAULT '',
      read_time TEXT DEFAULT '',
      category TEXT DEFAULT '',
      featured INTEGER DEFAULT 0,
      featured_image TEXT DEFAULT '',
      seo_title TEXT DEFAULT '',
      seo_description TEXT DEFAULT '',
      author_name TEXT DEFAULT '',
      author_title TEXT DEFAULT '',
      author_bio TEXT DEFAULT '',
      content TEXT DEFAULT '[]',
      status TEXT DEFAULT 'draft',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
    CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
    CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at);
    CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
  `);

  // Migration: add featured_image column if it doesn't exist
  try {
    db.exec(`ALTER TABLE articles ADD COLUMN featured_image TEXT DEFAULT ''`);
  } catch {
    // Column already exists
  }
}
