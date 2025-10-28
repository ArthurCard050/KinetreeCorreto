const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'public/cms-data');

// Função para ler arquivo JSON
const readJsonFile = async (filename) => {
  try {
    const filePath = path.join(DATA_DIR, filename);
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Erro ao ler ${filename}:`, error);
    return {};
  }
};

// Função para escrever arquivo JSON
const writeJsonFile = async (filename, data) => {
  try {
    const filePath = path.join(DATA_DIR, filename);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Erro ao escrever ${filename}:`, error);
    return false;
  }
};

// Função para fazer commit automático
const gitCommit = async (message) => {
  try {
    await execAsync('git add public/cms-data/');
    await execAsync(`git commit -m "${message}"`);
    console.log(`✅ Auto-commit: ${message}`);
    return true;
  } catch (error) {
    console.error('❌ Erro no git commit:', error.message);
    return false;
  }
};

// Rotas da API

// GET /api/cms/projects
app.get('/api/cms/projects', async (req, res) => {
  const data = await readJsonFile('projects.json');
  res.json(data);
});

// GET /api/cms/testimonials
app.get('/api/cms/testimonials', async (req, res) => {
  const data = await readJsonFile('testimonials.json');
  res.json(data);
});

// GET /api/cms/settings
app.get('/api/cms/settings', async (req, res) => {
  const data = await readJsonFile('settings.json');
  res.json(data);
});

// POST /api/cms/projects
app.post('/api/cms/projects', async (req, res) => {
  const data = await readJsonFile('projects.json');
  const newProject = { ...req.body, id: Date.now() };
  data.projects = [...(data.projects || []), newProject];
  await writeJsonFile('projects.json', data);
  await gitCommit(`Adicionar projeto: ${newProject.title}`);
  res.json(newProject);
});

// PUT /api/cms/projects/:id
app.put('/api/cms/projects/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const data = await readJsonFile('projects.json');
  const index = data.projects?.findIndex(p => p.id === id);
  if (index !== -1) {
    data.projects[index] = { ...req.body, id };
    await writeJsonFile('projects.json', data);
    await gitCommit(`Atualizar projeto: ${req.body.title}`);
    res.json(data.projects[index]);
  } else {
    res.status(404).json({ error: 'Projeto não encontrado' });
  }
});

// DELETE /api/cms/projects/:id
app.delete('/api/cms/projects/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const data = await readJsonFile('projects.json');
  data.projects = data.projects?.filter(p => p.id !== id) || [];
  await writeJsonFile('projects.json', data);
  await gitCommit(`Remover projeto: ID ${id}`);
  res.json({ success: true });
});

// POST /api/cms/testimonials
app.post('/api/cms/testimonials', async (req, res) => {
  const data = await readJsonFile('testimonials.json');
  const newTestimonial = { ...req.body, id: Date.now() };
  data.testimonials = [...(data.testimonials || []), newTestimonial];
  await writeJsonFile('testimonials.json', data);
  await gitCommit(`Adicionar depoimento: ${newTestimonial.name}`);
  res.json(newTestimonial);
});

// PUT /api/cms/testimonials/:id
app.put('/api/cms/testimonials/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const data = await readJsonFile('testimonials.json');
  const index = data.testimonials?.findIndex(t => t.id === id);
  if (index !== -1) {
    data.testimonials[index] = { ...req.body, id };
    await writeJsonFile('testimonials.json', data);
    await gitCommit(`Atualizar depoimento: ${req.body.name}`);
    res.json(data.testimonials[index]);
  } else {
    res.status(404).json({ error: 'Depoimento não encontrado' });
  }
});

// DELETE /api/cms/testimonials/:id
app.delete('/api/cms/testimonials/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const data = await readJsonFile('testimonials.json');
  data.testimonials = data.testimonials?.filter(t => t.id !== id) || [];
  await writeJsonFile('testimonials.json', data);
  await gitCommit(`Remover depoimento: ID ${id}`);
  res.json({ success: true });
});

// PUT /api/cms/settings/1
app.put('/api/cms/settings/1', async (req, res) => {
  await writeJsonFile('settings.json', req.body);
  await gitCommit('Atualizar configurações do site');
  res.json(req.body);
});

// POST /api/cms/git-commit
app.post('/api/cms/git-commit', async (req, res) => {
  const success = await gitCommit(req.body.message);
  res.json({ success });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor CMS rodando em http://localhost:${PORT}`);
  console.log(`📝 API disponível em http://localhost:${PORT}/api/cms`);
});