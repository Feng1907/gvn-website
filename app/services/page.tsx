"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/components/LangContext";
import styles from "./page.module.css";

interface ServiceItem {
  _id: string;
  title: string;
  titleEn: string;
  slug: string;
  description: string;
  emoji: string;
  bg: string;
}

export default function ServicesPage() {
  const { lang, t } = useLang();
  const page = t.servicesPage;

  const [items, setItems] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/services?active=true")
      .then((r) => r.json())
      .then((res) => {
        if (res.success) setItems(res.data);
        else setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.main}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>{page.heroTitle}</h1>
        <p className={styles.heroBreadcrumb}>
          {page.home} <span className={styles.sep}>/</span>{" "}
          <strong>{page.breadcrumb}</strong>
        </p>
      </section>

      {/* Grid */}
      <div className={styles.page}>
        {loading && (
          <div className={styles.state}>
            <span className={styles.spinner} />
            <p>Đang tải dữ liệu...</p>
          </div>
        )}

        {!loading && error && (
          <div className={styles.state}>
            <span style={{ fontSize: 48 }}>⚠️</span>
            <p>Không thể tải dịch vụ. Vui lòng thử lại sau.</p>
          </div>
        )}

        {!loading && !error && items.length === 0 && (
          <div className={styles.state}>
            <span style={{ fontSize: 48 }}>📭</span>
            <p>Chưa có dịch vụ nào.</p>
          </div>
        )}

        {!loading && !error && items.length > 0 && (
          <div className={styles.grid}>
            {items.map((item) => (
              <div key={item._id} className={styles.card}>
                <div className={styles.imgBox} style={{ background: item.bg }}>
                  <span className={styles.emoji}>{item.emoji}</span>
                </div>
                <div className={styles.label}>
                  {lang === "vi" ? item.title : (item.titleEn || item.title)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
