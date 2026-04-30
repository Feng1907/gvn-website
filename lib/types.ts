import { ObjectId } from "mongodb";

// ── Product ───────────────────────────────────────────────────────────────────
export interface ProductSpec {
  label: string;
  labelEn: string;
  value: string;
  valueEn: string;
}

export interface Product {
  _id?: ObjectId;
  name: string;
  nameEn?: string;
  slug: string;
  category: string;
  catSlug: string;
  tag: string;
  tagColor: string;
  description?: string;
  descriptionEn?: string;
  images: string[];
  imageFallbacks: string[];
  specs: ProductSpec[];
  features: string[];
  featuresEn: string[];
  relatedSlugs: string[];
  price?: number;
  emoji: string;
  bg: string;
  inStock: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// ── News / Article ────────────────────────────────────────────────────────────
export interface Article {
  _id?: ObjectId;
  title: string;
  titleEn?: string;
  slug: string;
  excerpt: string;
  excerptEn?: string;
  content: string;       // HTML hoặc Markdown
  contentEn?: string;
  category: string;
  categoryEn?: string;
  emoji: string;
  bg: string;
  readTime: number;      // phút
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// ── Contact / Quote Request ───────────────────────────────────────────────────
export interface Contact {
  _id?: ObjectId;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  status: "new" | "reading" | "replied" | "closed";
  createdAt: Date;
}

// ── Service ───────────────────────────────────────────────────────────────────
export interface Service {
  _id?: ObjectId;
  title: string;
  titleEn?: string;
  slug: string;
  description: string;
  descriptionEn?: string;
  emoji: string;
  bg: string;
  order: number;
  active: boolean;
  createdAt: Date;
}