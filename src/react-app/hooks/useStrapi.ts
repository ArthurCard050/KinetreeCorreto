import { useState, useEffect } from 'react';
import { Project, Testimonial } from '../../services/strapi';

interface UseProjectsOptions {
  featured?: boolean;
  limit?: number;
}

interface UseTestimonialsOptions {
  featured?: boolean;
  limit?: number;
}

// Hook for projects
export function useProjects(options: UseProjectsOptions = {}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load directly from local JSON for faster loading
      const response = await fetch('/cms-data/projects.json');
      if (response.ok) {
        const data = await response.json();
        let projects = data.projects;

        // Apply filters
        if (options.featured === true) {
          projects = projects.filter((p: any) => p.featured);
        } else if (options.featured === false) {
          projects = projects.filter((p: any) => !p.featured);
        }
        // Se options.featured for undefined, não aplica filtro

        // Apply sorting
        projects.sort((a: any, b: any) => a.order - b.order);

        // Apply limit
        if (options.limit) {
          projects = projects.slice(0, options.limit);
        }

        // Transform to match Strapi format
        const transformedProjects = projects.map((project: any) => ({
          ...project,
          image: { url: project.image }
        }));

        setProjects(transformedProjects);
      } else {
        throw new Error('Failed to load local data');
      }
    } catch (err) {
      console.error('Error loading projects:', err);
      setError('Failed to load projects');
      
      // Final fallback to minimal static data
      setProjects([
        {
          id: 1,
          title: "Saxias Saúde",
          category: "Site institucional",
          result: "+240% conversão",
          image: { url: "/case-01.webp" },
          url: "https://magical-moonbeam-f78b23.netlify.app/",
          featured: true,
          order: 1
        },
        {
          id: 2,
          title: "Laboratório Anacli",
          category: "Site institucional", 
          result: "+180% leads",
          image: { url: "/case-02.webp" },
          url: "https://anacli.netlify.app/",
          featured: true,
          order: 2
        },
        {
          id: 3,
          title: "Baixe Arquivos.shop",
          category: "E-commerce e Landing page",
          result: "+90% performance", 
          image: { url: "/case-03.webp" },
          url: "https://packpng.baixearquivos.shop/",
          featured: true,
          order: 3
        },
        {
          id: 4,
          title: "Cicatribio VET",
          category: "Landing page",
          result: "+130% eficiência",
          image: { url: "/case-04.webp" },
          url: "https://cicatribiovet.cicatribio.com.br/",
          featured: true,
          order: 4
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [options.featured, options.limit]);

  return { projects, loading, error, refetch: fetchProjects };
}

// Hook for testimonials
export function useTestimonials(options: UseTestimonialsOptions = {}) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load directly from local JSON for faster loading
      const response = await fetch('/cms-data/testimonials.json');
      if (response.ok) {
        const data = await response.json();
        let testimonials = data.testimonials;

        // Apply filters
        if (options.featured === true) {
          testimonials = testimonials.filter((t: any) => t.featured);
        } else if (options.featured === false) {
          testimonials = testimonials.filter((t: any) => !t.featured);
        }
        // Se options.featured for undefined, não aplica filtro

        // Apply sorting
        testimonials.sort((a: any, b: any) => a.order - b.order);

        // Apply limit
        if (options.limit) {
          testimonials = testimonials.slice(0, options.limit);
        }

        // Transform to match Strapi format
        const transformedTestimonials = testimonials.map((testimonial: any) => ({
          ...testimonial,
          avatar: { url: testimonial.avatar }
        }));

        setTestimonials(transformedTestimonials);
      } else {
        throw new Error('Failed to load local data');
      }
    } catch (err) {
      console.error('Error loading testimonials:', err);
      setError('Failed to load testimonials');
      
      // Final fallback to minimal static data
      setTestimonials([
        {
          id: 1,
          name: "Marina Silva",
          company: "EcoTech Solutions",
          role: "CEO",
          content: "Nossa conversão aumentou 240% após o lançamento do site institucional. O design é impecável e a performance é incrível!",
          avatar: { url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
          rating: 5,
          featured: true,
          order: 1
        },
        {
          id: 2,
          name: "Carlos Mendoza",
          company: "FinanceFlow",
          role: "Diretor de Marketing",
          content: "A Kinetree entregou nossa landing page em 10 dias e os leads aumentaram 180%. Profissionalismo excepcional!",
          avatar: { url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
          rating: 5,
          featured: true,
          order: 2
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [options.featured, options.limit]);

  return { testimonials, loading, error, refetch: fetchTestimonials };
}