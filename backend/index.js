const express = require('express');
const cors = require('cors');
const path = require('path');
const { educationHistory, skills, projects } = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend static files (for Vercel, use 'frontend/dist')
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use(cors());
app.use(express.json());

app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// Fallback to index.html for SPA (except API routes)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

if (process.env.VERCEL) {
  module.exports = app;
} else {
  app.listen(PORT, () => {
    console.log(` Server backend berjalan di http://localhost:${PORT}`);
  });
}