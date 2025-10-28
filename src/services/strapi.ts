// Strapi CMS Service
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;

interface CMSResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

class CMSService {
  private baseURL: string;
  private headers: HeadersInit;

  constructor() {
    this.baseURL = `${STRAPI_URL}/api`;
    this.headers = {
      'Content-Type': 'application/json',
      ...(API_TOKEN && { Authorization: `Bearer ${API_TOKEN}` }),
    };
  }



  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        headers: this.headers,
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('CMS API Error:', error);
      throw error;
    }
  }

  // Projects
  async getProjects(params?: {
    populate?: string;
    filters?: any;
    sort?: string;
    pagination?: { page: number; pageSize: number };
  }): Promise<CMSResponse<Project[]>> {
    const searchParams = new URLSearchParams();
    
    if (params?.populate) searchParams.append('populate', params.populate);
    if (params?.sort) searchParams.append('sort', params.sort);
    if (params?.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        searchParams.append(`filters[${key}]`, String(value));
      });
    }
    if (params?.pagination) {
      searchParams.append('pagination[page]', String(params.pagination.page));
      searchParams.append('pagination[pageSize]', String(params.pagination.pageSize));
    }

    const query = searchParams.toString();
    const response = await this.request<any>(`/projects${query ? `?${query}` : ''}`);
    
    return {
      data: response.data.map((item: any) => this.transformEntity<Project>(item)),
      meta: response.meta
    };
  }

  // Testimonials
  async getTestimonials(params?: {
    populate?: string;
    filters?: any;
    sort?: string;
    pagination?: { page: number; pageSize: number };
  }): Promise<CMSResponse<Testimonial[]>> {
    const searchParams = new URLSearchParams();
    
    if (params?.populate) searchParams.append('populate', params.populate);
    if (params?.sort) searchParams.append('sort', params.sort);
    if (params?.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        searchParams.append(`filters[${key}]`, String(value));
      });
    }
    if (params?.pagination) {
      searchParams.append('pagination[page]', String(params.pagination.page));
      searchParams.append('pagination[pageSize]', String(params.pagination.pageSize));
    }

    const query = searchParams.toString();
    const response = await this.request<any>(`/testimonials${query ? `?${query}` : ''}`);
    
    return {
      data: response.data.map((item: any) => this.transformEntity<Testimonial>(item)),
      meta: response.meta
    };
  }

  // Utility method to get image URL
  getImageUrl(imageData: any): string {
    if (!imageData) return '';
    
    // If it's already a URL string, return it
    if (typeof imageData === 'string') {
      return imageData;
    }
    
    // Handle Strapi format
    const { url } = imageData.data?.attributes || imageData.attributes || imageData;
    
    if (url?.startsWith('http')) {
      return url;
    }
    
    return url || imageData;
  }

  // Transform Strapi entity to simple object
  transformEntity<T>(entity: any): T & { id: number } {
    if (entity.attributes) {
      return {
        id: entity.id,
        ...entity.attributes,
      };
    }
    return entity;
  }
}

// Export singleton instance
export const cmsService = new CMSService();
export const strapiService = cmsService; // Backward compatibility

// Types for our content
export interface Project {
  id: number;
  title: string;
  description?: string;
  category: string;
  result: string;
  image: any;
  url: string;
  featured: boolean;
  order: number;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: any;
  rating: number;
  featured: boolean;
  order: number;
}

export default cmsService;