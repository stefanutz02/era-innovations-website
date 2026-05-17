// src/lib/blog.ts — fetches posts from email-api.erainnovations.ro

import { API_URL } from "./api";

export interface BlogPost {
  slug: string;
  title: string;
  title_en: string;
  date: string;
  category: string;
  excerpt: string;
  excerpt_en: string;
  content: string;        // rendered HTML (only on single-post fetch)
  rawContent?: string;    // original markdown (only on single-post fetch)
  readingTime: number;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  title_en: string;
  date: string;
  category: string;
  excerpt: string;
  excerpt_en: string;
  readingTime: number;
}

export async function loadBlogPosts(): Promise<BlogPostMeta[]> {
  const res = await fetch(`${API_URL}/blog`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: failed to load blog list`);
  }
  const data = (await res.json()) as { posts: BlogPostMeta[] };
  return data.posts ?? [];
}

export async function loadBlogPost(slug: string): Promise<BlogPost> {
  const clean = encodeURIComponent(slug.trim());
  const res = await fetch(`${API_URL}/blog/${clean}`, {
    headers: { Accept: "application/json" },
  });
  if (res.status === 404) {
    throw new Error("Not found");
  }
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: failed to load post`);
  }
  return (await res.json()) as BlogPost;
}
