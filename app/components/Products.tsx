"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "./LangContext";
import styles from "./Products.module.css";

interface ProductItem {
  _id: string;
  name: string;
  nameEn: string;
  slug: string;
  emoji: string;
  tag: string;
  tagColor: string;
  bg: string;
}

const PER_PAGE = 4;

export default function Products() {
  const { lang } = useLang();
  const [items, setItems] = useState<ProductItem[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products?featured=true&limit=8")
      .then((r) => r.json())
      .then((res) => { if (res.success) setItems(res.data.items ?? []); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(items.length / PER_PAGE);
  const visible = items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className={styles.section} id="products">
      <div className="section-header">
        <h2 className="section-label">Sản xuất phần mềm, cung cấp các thiết bị CNTT</h2>
        <Link href="/products" className="btn-see-all">Xem tất cả</Link>
      </div>

      {loading ? (
        <div style={{ textAlign: "center", padding: "40px 0", color: "rgba(255,255,255,0.4)" }}>
          Đang tải sản phẩm...
        </div>
      ) : (
        <>
          <div className={styles.grid}>
            {visible.map((p) => (
              <div className={styles.card} key={p._id}>
                <div className={styles.imgBox} style={{ background: p.bg }}>
                  <span className={styles.icon}>{p.emoji}</span>
                  <span className={styles.tag} style={{ background: p.tagColor }}>{p.tag}</span>
                </div>
                <div className={styles.info}>
                  <p>{lang === "vi" ? p.name : (p.nameEn || p.name)}</p>
                  <Link href={`/products/${p.slug}`} className={styles.link}>Xem chi tiết →</Link>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className={styles.dots}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${page === i ? styles.active : ""}`}
                  onClick={() => setPage(i)}
                  aria-label={`Trang ${i + 1}`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
