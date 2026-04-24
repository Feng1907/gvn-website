# COMPREHENSIVE MASTER PLAN — GVN WEBSITE
**Ngày lập: 2026-04-24 | Version 1.0**  
**Mục tiêu:** Hoàn thiện 100% website GVNTMC — bilingual, SEO-ready, Spring Boot-ready

---

## TIẾN ĐỘ TỔNG QUAN

| Phase | Tên | Trạng thái | Ưu tiên |
|-------|-----|------------|---------|
| 0 | Git Workflow | ✅ XONG | NGAY |
| 1 | Bug Fix Sprint | ✅ XONG | KHẨN CẤP |
| 2 | Trang Chi Tiết | ✅ XONG | CAO |
| 3 | DB Migration | ✅ XONG | TRUNG BÌNH-CAO |
| 4 | Design System | ✅ XONG | TRUNG BÌNH |
| 5 | Email Service | ✅ XONG | CAO |
| 6 | SEO & Metadata | ⬜ CHƯA LÀM | TRUNG BÌNH |
| 7 | Spring Boot Backend | ⬜ CHƯA LÀM | TƯƠNG LAI |
| 8 | Tích hợp Next.js ↔ Spring Boot | ⬜ CHƯA LÀM | TƯƠNG LAI |
| 9 | Deployment | 🔄 ĐANG TIẾN HÀNH | Song song |
| 10 | Admin Dashboard | ⬜ CHƯA LÀM | THẤP |

---

## BỐI CẢNH

Website GVNTMC đang ở trạng thái ~70% hoàn thiện. Frontend đủ 8 trang nhưng thiếu trang chi tiết (services/news/projects), dữ liệu sản phẩm/bài viết/dịch vụ còn hardcode trong code thay vì lấy từ DB, form contact chưa gọi API thực sự, và có lỗi nghiêm trọng về tên thư mục API. Mục tiêu cuối cùng là hệ thống chạy mượt, chuẩn SEO, ảnh không lỗi, và có nền tảng sẵn sàng tích hợp Spring Boot backend trong tương lai.

---

## PHASE 0 — GIT WORKFLOW ✅ XONG

**Mục tiêu:** Không bao giờ push thẳng lên `main`. Mỗi feature = 1 branch riêng.

- [x] Tạo branch `develop` từ `main`
- [x] Push `develop` lên GitHub
- [ ] Đặt `develop` là default branch trên GitHub *(thực hiện thủ công trên GitHub Settings)*
- [ ] Bảo vệ `main` branch *(Settings → Branches → Require PR before merging)*
- [x] Quy ước commit: `feat:`, `fix:`, `chore:`, `refactor:`
- [x] Cấu trúc branch: `feature/<tên>` tách từ `develop`, merge về `develop` qua PR

```
main ← chỉ merge từ develop khi stable
  └── develop ← integration branch
        ├── feature/fix-api-naming      ✅ đã tạo
        ├── feature/contact-api
        ├── feature/detail-pages
        ├── feature/db-migration
        ├── feature/design-system
        ├── feature/email-service
        ├── feature/seo
        └── feature/spring-boot-init (repo riêng hoặc subfolder /backend)
```

---

## PHASE 1 — BUG FIX SPRINT ✅ XONG
**Branch:** `feature/fix-api-naming` → merge vào `develop`

### 1.1 Fix API Folder Naming Bug
- [x] Đổi tên `app/api/products/id/` → `app/api/products/[id]/`
- [x] Đổi tên `app/api/projects/id/` → `app/api/projects/[id]/`
- [x] Đổi tên `app/api/news/id/` → `app/api/news/[id]/`
- [x] Cập nhật `params` sang `Promise<{id: string}>` (Next.js 16) trong cả 3 files

### 1.2 Tạo Mongoose Model cho Article
- [x] Tạo `lib/models/Article.ts` với đầy đủ schema + indexes

### 1.3 Fix Contact Form — Kết nối API thực
- [x] `handleSubmit` gọi `POST /api/contacts`
- [x] `isSending` state + loading button
- [x] Error handling + hiển thị thông báo lỗi
- [x] Validation: name và email required

### 1.4 Cập nhật Footer với thông tin thật
- [x] Địa chỉ HCM: "51 Đường số 9, KDC Him Lam, P. Tân Hưng, Q.7, TP.HCM"
- [x] Địa chỉ HN: "F9 Tòa nhà Kim Ánh, 78/1 Duy Tân, Cầu Giấy, Hà Nội"
- [x] SĐT: "028 62515094 – 091 970 4433"
- [x] Email: "support@gvntmc.com"
- [x] Quick links dùng `<Link>` đến routes thực (`/about`, `/services`...)

---

## PHASE 2 — TRANG CHI TIẾT ✅ XONG
**Branch:** `feature/db-migration` (commit: ae6c375)

### 2.1 Trang `/services/[slug]`
- [x] Tạo `app/services/[slug]/page.tsx` + CSS
- [x] Cập nhật `app/services/page.tsx` — Link đến detail

### 2.2 Trang `/news/[slug]`
- [x] Tạo `app/news/[slug]/page.tsx` + CSS
- [x] `app/news/page.tsx` — Link slug đến detail

### 2.3 Trang `/projects/[slug]`
- [x] Tạo `app/projects/[slug]/page.tsx` + CSS
- [x] Cập nhật `app/projects/page.tsx` — Link wrapper

---

## PHASE 3 — MIGRATE DỮ LIỆU HARDCODE SANG MONGODB ✅ XONG
**Ưu tiên: TRUNG BÌNH-CAO**  
**Chiến lược:** Fetch từ API, nếu API lỗi thì fallback sang hardcode.

### 3.1 Mở rộng Product schema ✅
- [x] `lib/models/Product.ts` + `lib/types.ts`: thêm images, imageFallbacks, specs, features, featuresEn, relatedSlugs, catSlug

### 3.2 Cập nhật Seed Script ✅
- [x] Seed đầy đủ 25 sản phẩm vào `lib/seed.ts` (4 danh mục: Linh kiện, Công trình, Ngân hàng, Phần mềm)
- [x] 6 articles, 6 services seed đầy đủ

### 3.3 Products Page — Fetch từ API ✅
- [x] `app/products/page.tsx`: `useEffect` fetch `/api/products?limit=50` + loading skeleton
- [x] Fallback sang hardcode khi API lỗi
- [x] Link href → `/products/${slug}`

### 3.4 Products Detail — Dùng API slug ✅
- [x] `app/products/[id]/page.tsx`: fetch `/api/products/{slug}` + fallback hardcode
- [x] Extract `SmartImg` → `app/components/SmartImg.tsx`
- [x] Xử lý loading + 404
- [x] Fix import trùng SmartImg + productId undefined bug

### 3.5 Services, News, Projects — Fetch từ API ✅
- [x] `app/news/page.tsx` → fetch `/api/news?published=true&limit=20` + fallback hardcode
- [~] `app/services/page.tsx` — giữ hardcode (Service model thiếu `features[]` và `image`, fetch từ API mất data hover overlay)
- [~] `app/projects/page.tsx` — giữ hardcode từ LangContext (chưa có project seed data)

---

## PHASE 4 — DESIGN SYSTEM ✅ XONG
**Ưu tiên: TRUNG BÌNH**

### 4.1 GVN Brand Color Tokens — thêm vào `app/globals.css`

```css
:root {
  /* GVN BRAND (dựa trên #1a6fc4) */
  --gvn-primary-50:  #e8f2fb;
  --gvn-primary-100: #d0e6f8;
  --gvn-primary-400: #3d8fd5;
  --gvn-primary-500: #1a6fc4;   /* GVN Brand Blue chính */
  --gvn-primary-600: #155aa0;
  --gvn-primary-700: #0f4478;

  /* Semantic */
  --gvn-success: #10b981;
  --gvn-warning: #f59e0b;
  --gvn-error:   #ef4444;

  /* Light Theme */
  --gvn-light-bg:      #f8faff;
  --gvn-light-surface: #ffffff;
  --gvn-light-border:  #e0ecfa;
  --gvn-light-text:    #1a2340;
  --gvn-light-text-2:  #475569;

  /* Spacing (8px grid) */
  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px;
  --space-6:24px; --space-8:32px; --space-10:40px; --space-12:48px;
  --space-16:64px; --space-20:80px;

  /* Border Radius */
  --radius-sm:4px; --radius-md:8px; --radius-lg:16px;
  --radius-xl:20px; --radius-2xl:24px; --radius-full:9999px;

  /* Shadows */
  --shadow-sm:   0 2px 8px rgba(0,0,0,0.12);
  --shadow-md:   0 4px 16px rgba(0,0,0,0.18);
  --shadow-lg:   0 8px 32px rgba(0,0,0,0.45);
  --shadow-blue: 0 4px 20px rgba(26,111,196,0.35);
}
```

- [x] Thêm CSS variables GVN brand vào `app/globals.css`
- [x] Cập nhật `.btn-primary` dùng `--gvn-primary-500` + `--shadow-blue`
- [x] Không xóa biến cũ để tránh break

---

## PHASE 5 — EMAIL SERVICE ✅ XONG
**Branch:** `feature/email-service`

- [x] `npm install resend` (v6.12.2)
- [x] Thêm hướng dẫn vào `.env.local`: `RESEND_API_KEY`, `NOTIFY_EMAIL`
- [x] Tạo `lib/email.ts`: `sendContactNotification()` + `sendContactConfirmation()`
- [x] Cập nhật `app/api/contacts/route.ts`: fire-and-forget email sau `insertOne`
- [x] Email lỗi → vẫn lưu DB và trả 201 (Promise.all.catch)

---

## PHASE 6 — SEO & METADATA ⬜ CHƯA LÀM
**Ưu tiên: TRUNG BÌNH**  
**Vấn đề:** Pages dùng `"use client"` → không export `metadata` trực tiếp.  
**Giải pháp:** Thêm `layout.tsx` (server component) cho từng route.

- [ ] Tạo `app/products/layout.tsx` — export `metadata`
- [ ] Tạo `app/services/layout.tsx`
- [ ] Tạo `app/news/layout.tsx`
- [ ] Tạo `app/projects/layout.tsx`
- [ ] Tạo `app/about/layout.tsx`
- [ ] Tạo `app/contact/layout.tsx`
- [ ] Cập nhật `app/layout.tsx` root: thêm `openGraph`, `twitter`, `robots`, `canonical`
- [ ] Tạo `app/sitemap.ts` — dynamic sitemap
- [ ] Tạo `app/robots.ts`
- [ ] Thêm JSON-LD `Organization` schema vào root layout
- [ ] Thêm JSON-LD `Product` schema vào product detail page

---

## PHASE 7 — SPRING BOOT BACKEND ⬜ CHƯA LÀM
**Ưu tiên: TƯƠNG LAI — Triển khai sau Phase 1–6**

### Cấu trúc Project (Repo riêng: `gvn-backend`)

```
gvn-backend/src/main/java/com/gvntmc/backend/
├── config/
│   ├── CorsConfig.java         ← Allow localhost:3000 + gvntmc.com
│   ├── MongoConfig.java        ← MongoDB Atlas connection
│   └── SecurityConfig.java     ← JWT (Admin phase)
├── controller/
│   ├── ProductController.java  ← /api/v1/products
│   ├── ServiceController.java  ← /api/v1/services
│   ├── ProjectController.java  ← /api/v1/projects
│   ├── ArticleController.java  ← /api/v1/news
│   └── ContactController.java  ← /api/v1/contacts
├── service/                    ← Business logic
├── repository/                 ← MongoRepository<Entity, String>
├── entity/                     ← @Document(collection="...")
├── dto/response/ApiResponse.java   ← { success, data, error }
└── exception/GlobalExceptionHandler.java
```

### REST API Endpoints

| Method | Path | Mô tả | Auth |
|--------|------|-------|------|
| GET | `/products?page=0&size=12&category=X` | Danh sách | Public |
| GET | `/products/{slug}` | Chi tiết | Public |
| POST/PUT/DELETE | `/products` | CRUD | Admin |
| GET | `/services?active=true` | Danh sách | Public |
| GET | `/services/{slug}` | Chi tiết | Public |
| GET | `/projects?category=X` | Danh sách | Public |
| GET | `/news?published=true` | Danh sách | Public |
| GET | `/news/{slug}` | Nội dung đầy đủ | Public |
| POST | `/contacts` | Gửi form | Public |
| GET | `/search?q=cisco` | Tìm kiếm | Public |

### CORS Config

```java
config.setAllowedOrigins(Arrays.asList(
    "http://localhost:3000",
    "https://gvntmc.com",
    "https://www.gvntmc.com"
));
```

### application.yml

```yaml
spring:
  data.mongodb.uri: ${MONGODB_URI}
  mail.host: smtp.gmail.com
server.port: 8080
```

---

## PHASE 8 — TÍCH HỢP NEXT.JS ↔ SPRING BOOT ⬜ CHƯA LÀM

### API Abstraction Layer — `lib/apiClient.ts`

```typescript
const BASE = process.env.NEXT_PUBLIC_USE_SPRING === "true"
  ? "/api/v1"   // proxy → Spring Boot
  : "/api";     // Next.js API routes

export async function fetchProducts(params?) { ... }
export async function fetchProductBySlug(slug: string) { ... }
```

### Proxy trong `next.config.ts`

```typescript
async rewrites() {
  if (process.env.NEXT_PUBLIC_USE_SPRING !== "true") return [];
  return [{ source: "/api/v1/:path*", destination: `${SPRING_BOOT_URL}/api/v1/:path*` }];
}
```

### Env Variables cần thêm

```bash
NEXT_PUBLIC_USE_SPRING=false     # true = dùng Spring Boot
SPRING_BOOT_URL=http://localhost:8080
```

- [ ] Tạo `lib/apiClient.ts`
- [ ] Cập nhật `next.config.ts`
- [ ] Cập nhật pages dùng `apiClient`

---

## PHASE 9 — DEPLOYMENT 🔄 ĐANG TIẾN HÀNH

### Vercel (Frontend)
- [ ] Kết nối GitHub repo với Vercel
- [ ] Cấu hình env vars: `MONGODB_URI`, `RESEND_API_KEY`, `NOTIFY_EMAIL`
- [ ] Auto-deploy từ `main`

### MongoDB Atlas (Database)
- [ ] Tạo free cluster
- [ ] Whitelist IP `0.0.0.0/0` cho Vercel
- [ ] Cập nhật `MONGODB_URI` thành Atlas connection string
- [ ] Chạy `npx tsx lib/seed.ts` để seed data

### Spring Boot Hosting (Phase 7+)
**Khuyến nghị: Railway.app** ($5/tháng — auto-detect Java/Maven)

---

## PHASE 10 — ADMIN DASHBOARD ⬜ CHƯA LÀM

- [ ] Route `/admin` bảo vệ bằng NextAuth.js (Auth.js v5)
- [ ] CRUD sản phẩm (thêm, sửa, xóa, upload ảnh)
- [ ] Quản lý liên hệ (xem, đổi status: new/reading/replied/closed)
- [ ] Quản lý bài viết (WYSIWYG editor)
- [ ] Dashboard overview (số liệu tổng)
- [ ] Image upload: Cloudinary hoặc Uploadthing

---

## GHI CHÚ KỸ THUẬT QUAN TRỌNG

### Next.js 16 — Async Params

```typescript
// Route Handler (server) — PHẢI await
type Context = { params: Promise<{ id: string }> };
export async function GET(req: NextRequest, { params }: Context) {
  const { id } = await params;
}

// Client Component — đọc đồng bộ OK
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params; // OK trong "use client"
}
```

### lucide-react v1.x — Không có Social Icons
Dùng inline SVG cho: Facebook, Twitter/X, LinkedIn, Instagram

### SmartImg Pattern
`app/components/SmartImg.tsx` — thứ tự: local `/images/...` → CDN fallback → emoji SVG placeholder

### API Response Format (Nhất quán cho cả Next.js & Spring Boot)

```json
{ "success": true, "data": { ... } }
{ "success": true, "data": { "items": [...], "pagination": { "total": 25, "page": 1 } } }
{ "success": false, "error": "Mô tả lỗi" }
```

---

## BẢNG FILES QUAN TRỌNG

| File | Phase | Loại |
|------|-------|------|
| `app/api/products/[id]/route.ts` | 1 ✅ | Fixed |
| `app/api/projects/[id]/route.ts` | 1 ✅ | Fixed |
| `app/api/news/[id]/route.ts` | 1 ✅ | Fixed |
| `lib/models/Article.ts` | 1 ✅ | Tạo mới |
| `app/contact/page.tsx` | 1 ✅ | Fixed |
| `app/components/Footer.tsx` | 1 ✅ | Fixed |
| `app/services/[slug]/page.tsx` | 2 ✅ | Tạo mới |
| `app/news/[slug]/page.tsx` | 2 ✅ | Tạo mới |
| `app/projects/[slug]/page.tsx` | 2 ✅ | Tạo mới |
| `lib/models/Product.ts` | 3 ✅ | Mở rộng |
| `lib/types.ts` | 3 ✅ | Cập nhật |
| `lib/seed.ts` | 3 ✅ | Mở rộng |
| `app/products/page.tsx` | 3 ✅ | Fetch API |
| `app/products/[id]/page.tsx` | 3 ✅ | Fetch API |
| `app/globals.css` | 4 ⬜ | Design tokens |
| `app/components/SmartImg.tsx` | 3/4 ✅ | Tạo mới |
| `lib/email.ts` | 5 ⬜ | Tạo mới |
| `app/api/contacts/route.ts` | 5 ⬜ | Thêm email |
| `app/*/layout.tsx` (6 files) | 6 ⬜ | Tạo mới |
| `app/sitemap.ts` | 6 ⬜ | Tạo mới |
| `lib/apiClient.ts` | 8 ⬜ | Tạo mới |
| `next.config.ts` | 8 ⬜ | Proxy rewrites |
