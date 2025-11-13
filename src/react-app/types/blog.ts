export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  coverImage: string;
  excerpt: string;
  body: string;
  category: string;
  tags?: string[];
  published: boolean;
  featured: boolean;
  readTime: number;
}

export interface BlogPostMetadata {
  title: string;
  slug: string;
  date: string;
  author: string;
  coverImage: string;
  excerpt: string;
  category: string;
  tags?: string[];
  published: boolean;
  featured: boolean;
  readTime: number;
}
