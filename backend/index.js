const express = require('express');
const cors = require('cors');
const path = require('path');
const { educationHistory, skills, projects } = require('./data');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Fallback to index.html for SPA
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
console.log(` Server backend berjalan di http://localhost:${PORT}`);
});