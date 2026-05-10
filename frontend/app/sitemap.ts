import type { MetadataRoute } from "next";

const SITE_URL = "https://gvntmc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: SITE_URL,                  priority: 1.0,  changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/services`,    priority: 0.9,  changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/products`,    priority: 0.9,  changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/projects`,    priority: 0.8,  changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/news`,        priority: 0.8,  changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/about`,       priority: 0.7,  changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/contact`,     priority: 0.7,  changeFrequency: "yearly" as const },
  ];

  const servicesSlugs = [
    "bao-tri-nang-cap", "linh-kien-cntt", "thiet-bi-ngan-hang",
    "it-outsourcing", "camera-cctv", "tu-van-thi-cong",
  ];
  const newsSlugs = [
    "chien-luoc-an-ninh-vat-ly", "dich-vu-helpdesk-it-outsourcing",
    "dich-vu-bao-tri-nang-cap-cntt", "giai-phap-camera-giam-sat-cctv",
    "tu-van-thiet-ke-thi-cong-cong-trinh", "thiet-bi-chuyen-dung-ngan-hang",
  ];

  const serviceRoutes = servicesSlugs.map(slug => ({
    url: `${SITE_URL}/services/${slug}`,
    priority: 0.8 as number,
    changeFrequency: "monthly" as const,
  }));

  const newsRoutes = newsSlugs.map(slug => ({
    url: `${SITE_URL}/news/${slug}`,
    priority: 0.7 as number,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes, ...newsRoutes].map(r => ({
    url: r.url,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
