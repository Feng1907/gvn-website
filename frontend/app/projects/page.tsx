'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '@/components/LangContext';
import styles from './projects.module.css';

// Map title → slug cho link chi tiết
const slugMap: Record<string, string> = {
  "Thi công chuyển địa điểm chi nhánh và xây dựng hệ thống điện, mạng – Chi nhánh ngân hàng Shinhan": "shinhan-bank",
  "Thi công hệ thống điện và mạng cho nhà máy Comet Vina": "comet-vina",
  "Thi công hệ thống mạng, camera giám sát, loa cho nhà máy và văn phòng Chemtronics": "chemtronics",
  "Thi công hệ thống mạng, camera giám sát (CCTV), loa cho văn phòng chi nhánh Busan": "busan",
  "Thi công hệ thống điện, mạng cho Hyosung": "hyosung",
  "Thi công hệ thống mạng và camera giám sát cho CJ Foods": "cjfoods",
  "Lắp đặt tủ rack và hệ thống server room": "datacenter",
  "Thi công hệ thống điện nhẹ cho công trình dân dụng": "construction",
};

export default function ProjectsPage() {
  const { t } = useLang();
  const page = t.projectsPage;
  const [activeCategory, setActiveCategory] = useState<string>(page.categories[0]);

  const filtered = activeCategory === page.categories[0]
    ? page.items
    : page.items.filter((p) => p.category === (activeCategory as typeof p.category));

  return (
    <main className={styles.page}>

      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{page.heroTitle}</h1>
          <p className={styles.heroBreadcrumb}>
            <span>{page.home}</span>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>{page.breadcrumb}</span>
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className={styles.section}>
        <div className={styles.container}>

          {/* Filter */}
          <div className={styles.filterBar}>
            {page.categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {filtered.map((project, i) => {
              const slug = slugMap[project.title];
              const CardWrapper = slug
                ? ({ children }: { children: React.ReactNode }) => (
                    <Link href={`/projects/${slug}`} className={styles.card}>{children}</Link>
                  )
                : ({ children }: { children: React.ReactNode }) => (
                    <div className={styles.card}>{children}</div>
                  );
              return (
                <CardWrapper key={i}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className={styles.title}>{project.title}</h3>
                </CardWrapper>
              );
            })}
          </div>

          {/* Load More */}
          <div className={styles.loadMore}>
            <button className={styles.loadMoreBtn}>{page.loadMore}</button>
          </div>
        </div>
      </section>
    </main>
  );
}