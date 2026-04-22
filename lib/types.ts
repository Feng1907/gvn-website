import { ObjectId } from "mongodb";

// ── Product ───────────────────────────────────────────────────────────────────
export interface Product {
  _id?: ObjectId;
  name: string;          // Tên sản phẩm (Tiếng Việt)
  nameEn?: string;       // Tên sản phẩm (English)
  slug: string;          // URL-friendly
  category: string;      // Danh mục
  tag: string;           // Nhãn ngắn (SSD, 16TB, ...)
  tagColor: string;      // Màu nhãn (#hex)
  description?: string;
  descriptionEn?: string;
  price?: number;        // Giá (VNĐ), optional
  emoji: string;         // Icon hiển thị
  bg: string;            // CSS gradient background
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