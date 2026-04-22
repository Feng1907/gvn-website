'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useLang } from '@/components/LangContext';
import styles from './projects.module.css';

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
            {filtered.map((project, i) => (
              <div key={i} className={styles.card}>
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
              </div>
            ))}
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