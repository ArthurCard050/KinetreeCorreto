import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const DATA_DIR = path.join(process.cwd(), 'public/cms-data');

// Função para ler arquivo JSON
const readJsonFile = async (filename: string) => {
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
const writeJsonFile = async (filename: string, data: any) => {
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
const gitCommit = async (message: string) => {
  try {
    await execAsync('git add public/cms-data/');
    await execAsync(`git commit -m "${message}"`);
    await execAsync('git push');
    return true;
  } catch (error) {
    console.error('Erro no git commit:', error);
    return false;
  }
};

// Handlers da API
export const cmsHandlers = {
  // GET /api/cms/projects
  getProjects: async () => {
    return await readJsonFile('projects.json');
  },

  // GET /api/cms/testimonials
  getTestimonials: async () => {
    return await readJsonFile('testimonials.json');
  },

  // GET /api/cms/settings
  getSettings: async () => {
    return await readJsonFile('settings.json');
  },

  // POST /api/cms/projects
  createProject: async (projectData: any) => {
    const data = await readJsonFile('projects.json');
    const newProject = { ...projectData, id: Date.now() };
    data.projects = [...(data.projects || []), newProject];
    await writeJsonFile('projects.json', data);
    return newProject;
  },

  // PUT /api/cms/projects/:id
  updateProject: async (id: number, projectData: any) => {
    const data = await readJsonFile('projects.json');
    const index = data.projects?.findIndex((p: any) => p.id === id);
    if (index !== -1) {
      data.projects[index] = { ...projectData, id };
      await writeJsonFile('projects.json', data);
      return data.projects[index];
    }
    return null;
  },

  // DELETE /api/cms/projects/:id
  deleteProject: async (id: number) => {
    const data = await readJsonFile('projects.json');
    data.projects = data.projects?.filter((p: any) => p.id !== id) || [];
    await writeJsonFile('projects.json', data);
    return true;
  },

  // POST /api/cms/testimonials
  createTestimonial: async (testimonialData: any) => {
    const data = await readJsonFile('testimonials.json');
    const newTestimonial = { ...testimonialData, id: Date.now() };
    data.testimonials = [...(data.testimonials || []), newTestimonial];
    await writeJsonFile('testimonials.json', data);
    return newTestimonial;
  },

  // PUT /api/cms/testimonials/:id
  updateTestimonial: async (id: number, testimonialData: any) => {
    const data = await readJsonFile('testimonials.json');
    const index = data.testimonials?.findIndex((t: any) => t.id === id);
    if (index !== -1) {
      data.testimonials[index] = { ...testimonialData, id };
      await writeJsonFile('testimonials.json', data);
      return data.testimonials[index];
    }
    return null;
  },

  // DELETE /api/cms/testimonials/:id
  deleteTestimonial: async (id: number) => {
    const data = await readJsonFile('testimonials.json');
    data.testimonials = data.testimonials?.filter((t: any) => t.id !== id) || [];
    await writeJsonFile('testimonials.json', data);
    return true;
  },

  // PUT /api/cms/settings/1
  updateSettings: async (settingsData: any) => {
    await writeJsonFile('settings.json', settingsData);
    return settingsData;
  },

  // POST /api/cms/git-commit
  gitCommit: async (message: string) => {
    return await gitCommit(message);
  },
};