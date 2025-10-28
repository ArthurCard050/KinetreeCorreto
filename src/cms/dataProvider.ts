import { DataProvider } from 'react-admin';

// Função para fazer auto-commit
const autoCommit = async (message: string) => {
  try {
    await fetch('/api/cms/git-commit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
  } catch (error) {
    console.error('Erro no auto-commit:', error);
  }
};

// Data provider personalizado
export const dataProvider: DataProvider = {
  getList: async (resource) => {
    const response = await fetch(`/api/cms/${resource}`);
    const data = await response.json();
    
    if (resource === 'projects') {
      return {
        data: data.projects || [],
        total: data.projects?.length || 0,
      };
    }
    
    if (resource === 'testimonials') {
      return {
        data: data.testimonials || [],
        total: data.testimonials?.length || 0,
      };
    }
    
    if (resource === 'settings') {
      return {
        data: [{ id: 1, ...data }],
        total: 1,
      };
    }
    
    return { data: [], total: 0 };
  },

  getOne: async (resource, params) => {
    const response = await fetch(`/api/cms/${resource}`);
    const data = await response.json();
    
    if (resource === 'projects') {
      const project = data.projects?.find((p: any) => p.id === params.id);
      return { data: project };
    }
    
    if (resource === 'testimonials') {
      const testimonial = data.testimonials?.find((t: any) => t.id === params.id);
      return { data: testimonial };
    }
    
    if (resource === 'settings') {
      return { data: { id: 1, ...data } };
    }
    
    return { data: {} };
  },

  getMany: async (resource, params) => {
    const response = await fetch(`/api/cms/${resource}`);
    const data = await response.json();
    
    if (resource === 'projects') {
      const projects = data.projects?.filter((p: any) => params.ids.includes(p.id)) || [];
      return { data: projects };
    }
    
    if (resource === 'testimonials') {
      const testimonials = data.testimonials?.filter((t: any) => params.ids.includes(t.id)) || [];
      return { data: testimonials };
    }
    
    return { data: [] };
  },

  getManyReference: async () => {
    return { data: [], total: 0 };
  },

  create: async (resource, params) => {
    const response = await fetch(`/api/cms/${resource}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params.data),
    });
    
    const data = await response.json();
    
    // Auto-commit
    await autoCommit(`Adicionar ${resource}: ${params.data.title || params.data.name || 'item'}`);
    
    return { data };
  },

  update: async (resource, params) => {
    const response = await fetch(`/api/cms/${resource}/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params.data),
    });
    
    const data = await response.json();
    
    // Auto-commit
    await autoCommit(`Atualizar ${resource}: ${params.data.title || params.data.name || 'item'}`);
    
    return { data };
  },

  updateMany: async () => {
    return { data: [] };
  },

  delete: async (resource, params) => {
    await fetch(`/api/cms/${resource}/${params.id}`, {
      method: 'DELETE',
    });
    
    // Auto-commit
    await autoCommit(`Remover ${resource}: ID ${params.id}`);
    
    return { data: params.previousData };
  },

  deleteMany: async () => {
    return { data: [] };
  },
};