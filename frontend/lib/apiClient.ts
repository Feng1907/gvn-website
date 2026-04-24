/**
 * API Abstraction Layer
 *
 * NEXT_PUBLIC_USE_SPRING=false  → gọi Next.js API routes (/api/...)
 * NEXT_PUBLIC_USE_SPRING=true   → proxy tới Spring Boot (/api/v1/...)
 *
 * Response format (cả hai backend đều trả về):
 *   { success: true,  data: T }
 *   { success: false, error: string }
 */

const USE_SPRING = process.env.NEXT_PUBLIC_USE_SPRING === "true";
const BASE       = USE_SPRING ? "/api/v1" : "/api";

// ── Shared response shape ──────────────────────────────────────────────────

export interface ApiPage<T> {
  items:      T[];
  total:      number;
  page:       number;
  totalPages: number;
}

export interface ProductItem {
  _id?:           string;
  id?:            string;
  name:           string;
  nameEn?:        string;
  slug:           string;
  category:       string;
  catSlug:        string;
  images:         string[];
  imageFallbacks: string[];
  emoji:          string;
  bg:             string;
  tag?:           string;
  tagColor?:      string;
  featured?:      boolean;
  inStock?:       boolean;
  specs?:         { label: string; labelEn: string; value: string; valueEn: string }[];
  features?:      string[];
  featuresEn?:    string[];
  description?:   string;
  descriptionEn?: string;
  relatedSlugs?:  string[];
}

export interface ArticleItem {
  _id?:        string;
  id?:         string;
  slug:        string;
  title:       string;
  titleEn?:    string;
  excerpt:     string;
  excerptEn?:  string;
  content?:    string;
  contentEn?:  string;
  category:    string;
  categoryEn?: string;
  emoji:       string;
  bg:          string;
  readTime:    number;
  published:   boolean;
  createdAt:   string;
}

export interface ServiceItem {
  _id?:           string;
  id?:            string;
  slug:           string;
  title:          string;
  titleEn?:       string;
  description:    string;
  descriptionEn?: string;
  emoji:          string;
  bg:             string;
  order:          number;
  active:         boolean;
}

export interface ProjectItem {
  _id?:           string;
  id?:            string;
  slug:           string;
  title:          string;
  titleEn?:       string;
  description?:   string;
  descriptionEn?: string;
  client?:        string;
  category:       string;
  categoryEn?:    string;
  images?:        string[];
  featured?:      boolean;
  createdAt?:     string;
}

// ── Internal fetch helper ──────────────────────────────────────────────────

async function apiFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.success) return null;
    return json.data as T;
  } catch {
    return null;
  }
}

// ── Products ───────────────────────────────────────────────────────────────

export async function fetchProducts(params?: {
  category?: string;
  catSlug?:  string;
  featured?: boolean;
  page?:     number;
  limit?:    number;
}): Promise<ApiPage<ProductItem> | null> {
  const q = new URLSearchParams();
  if (params?.category)        q.set("category", params.category);
  if (params?.catSlug)         q.set("catSlug",  params.catSlug);
  if (params?.featured != null) q.set("featured", String(params.featured));
  if (params?.page != null)    q.set(USE_SPRING ? "page" : "page",  String(params.page));
  if (params?.limit != null)   q.set(USE_SPRING ? "size" : "limit", String(params.limit));

  const url = `${BASE}/products${q.toString() ? `?${q}` : ""}`;
  return apiFetch<ApiPage<ProductItem>>(url);
}

export async function fetchProductBySlug(slug: string): Promise<ProductItem | null> {
  return apiFetch<ProductItem>(`${BASE}/products/${slug}`);
}

// ── Services ───────────────────────────────────────────────────────────────

export async function fetchServices(active = true): Promise<ServiceItem[] | null> {
  const url = `${BASE}/services${active ? "?active=true" : ""}`;
  // Next.js route trả về { success, data: items[] }
  // Spring Boot route trả về { success, data: items[] }
  return apiFetch<ServiceItem[]>(url);
}

export async function fetchServiceBySlug(slug: string): Promise<ServiceItem | null> {
  return apiFetch<ServiceItem>(`${BASE}/services/${slug}`);
}

// ── News / Articles ────────────────────────────────────────────────────────

export async function fetchArticles(params?: {
  published?: boolean;
  category?:  string;
  page?:      number;
  limit?:     number;
}): Promise<ApiPage<ArticleItem> | null> {
  const q = new URLSearchParams();
  if (params?.published != null) q.set("published", String(params.published));
  if (params?.category)          q.set("category",  params.category);
  if (params?.page != null)      q.set(USE_SPRING ? "page" : "page",  String(params.page));
  if (params?.limit != null)     q.set(USE_SPRING ? "size" : "limit", String(params.limit));

  return apiFetch<ApiPage<ArticleItem>>(`${BASE}/news${q.toString() ? `?${q}` : ""}`);
}

export async function fetchArticleBySlug(slug: string): Promise<ArticleItem | null> {
  return apiFetch<ArticleItem>(`${BASE}/news/${slug}`);
}

// ── Projects ───────────────────────────────────────────────────────────────

export async function fetchProjects(params?: {
  category?: string;
  featured?: boolean;
  page?:     number;
  limit?:    number;
}): Promise<ApiPage<ProjectItem> | null> {
  const q = new URLSearchParams();
  if (params?.category)         q.set("category", params.category);
  if (params?.featured != null) q.set("featured", String(params.featured));
  if (params?.page != null)     q.set(USE_SPRING ? "page" : "page",  String(params.page));
  if (params?.limit != null)    q.set(USE_SPRING ? "size" : "limit", String(params.limit));

  return apiFetch<ApiPage<ProjectItem>>(`${BASE}/projects${q.toString() ? `?${q}` : ""}`);
}

export async function fetchProjectBySlug(slug: string): Promise<ProjectItem | null> {
  return apiFetch<ProjectItem>(`${BASE}/projects/${slug}`);
}

// ── Search ─────────────────────────────────────────────────────────────────

export interface SearchResult {
  products: ProductItem[];
  articles: ArticleItem[];
  services: ServiceItem[];
}

export async function fetchSearch(q: string): Promise<SearchResult | null> {
  if (!q.trim()) return null;
  return apiFetch<SearchResult>(`${BASE}/search?q=${encodeURIComponent(q)}`);
}

// ── Contact ────────────────────────────────────────────────────────────────

export async function postContact(payload: {
  name:     string;
  email:    string;
  phone?:   string;
  company?: string;
  subject?: string;
  message:  string;
}): Promise<{ message: string; messageEn: string } | null> {
  try {
    const res = await fetch(`${BASE}/contacts`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error || "Unknown error");
    return json.data;
  } catch {
    return null;
  }
}
