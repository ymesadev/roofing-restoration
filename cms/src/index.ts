import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
import fs from 'fs';
import { initializeSchema } from './db/schema';
import articlesRouter from './routes/articles';
import adminRouter from './routes/admin';
import { authMiddleware, login, verifyMe } from './middleware/auth';

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize database
initializeSchema();

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer configuration
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (_req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG, PNG, GIF, and WebP images are allowed'));
    }
  },
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Serve uploaded images (public, no auth)
app.use('/uploads', express.static(uploadsDir));

// Serve admin SPA static files
app.use('/admin', express.static(path.join(__dirname, '../admin')));

// Auth routes
app.post('/api/auth/login', login);
app.get('/api/auth/me', authMiddleware, verifyMe);

// Upload endpoint (auth-protected)
app.post('/api/admin/upload', authMiddleware, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file provided' });
  }
  res.json({ url: `/uploads/${req.file.filename}` });
});

// Public API routes
app.use('/api/articles', articlesRouter);

// Admin API routes (protected)
app.use('/api/admin', authMiddleware, adminRouter);

// Fallback for admin SPA routes
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../admin/index.html'));
});

app.listen(PORT, () => {
  console.log(`CMS server running on http://localhost:${PORT}`);
  console.log(`Admin panel: http://localhost:${PORT}/admin`);
  console.log(`API: http://localhost:${PORT}/api/articles`);
});
