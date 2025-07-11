const express = require('express');
const cors = require('cors');
const path = require('path');
const { educationHistory, skills, projects } = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend static files (for Vercel, use 'frontend/dist')
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// API routes
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// Fallback to index.html for SPA (except API routes)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  // Cek path index.html untuk Vercel (karena working directory bisa berbeda)
  const indexPath = path.join(__dirname, '../frontend/dist/index.html');
  res.sendFile(indexPath, function(err) {
    if (err) {
      // Coba fallback ke path lain jika di Vercel
      res.sendFile(path.join(process.cwd(), 'frontend/dist/index.html'));
    }
  });
});

if (process.env.VERCEL) {
  module.exports = app;
} else {
  app.listen(PORT, () => {
    console.log(` Server backend berjalan di http://localhost:${PORT}`);
  });
}