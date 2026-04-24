"use client";
import { useLang } from "@/components/LangContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className={styles.hero}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          {h.badge}
        </div>

        <h1 className={styles.heading}>
          {h.title1}<br />
          <span className={styles.gradientText}>{h.title2}</span> {h.title3}
        </h1>

        <p className={styles.desc}>{h.desc}</p>

        <div className={styles.btns}>
          <button className="btn-orange">{h.btnQuote}</button>
          <button className="btn-outline">{h.btnService}</button>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>10<span className={styles.plus}>+</span></span>
            <span className={styles.statLabel}>{h.stat1}</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>200<span className={styles.plus}>+</span></span>
            <span className={styles.statLabel}>{h.stat2}</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>50<span className={styles.plus}>+</span></span>
            <span className={styles.statLabel}>{h.stat3}</span>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className={styles.bento}>
        {/* Wide: spans 2 columns */}
        <div className={`${styles.cell} ${styles.wide} ${styles.cellBlue}`}>
          <div className={styles.cellIcon}>🛡️</div>
          <div className={styles.cellContent}>
            <div className={styles.cellTitle}>Enterprise Security</div>
            <div className={styles.cellDesc}>ISO 27001 Certified · End-to-end</div>
          </div>
          <span className={styles.cellBadge}>✓ Active</span>
        </div>

        {/* Cloud */}
        <div className={`${styles.cell} ${styles.cellTeal}`}>
          <div className={styles.cellIcon}>☁️</div>
          <div className={styles.cellTitle}>Cloud</div>
          <div className={styles.cellDesc}>99.9% uptime SLA</div>
        </div>

        {/* Tall: spans 2 rows */}
        <div className={`${styles.cell} ${styles.tall} ${styles.cellPurple}`}>
          <div className={styles.cellIcon}>⚙️</div>
          <div className={styles.cellTitle}>24/7 Support</div>
          <div className={styles.cellDesc}>Technical team always on call</div>
          <div className={styles.cellStat}>
            <span>98%</span>
            <small>satisfaction</small>
          </div>
        </div>

        {/* Network */}
        <div className={`${styles.cell} ${styles.cellGreen}`}>
          <div className={styles.cellIcon}>📡</div>
          <div className={styles.cellTitle}>Network</div>
          <div className={styles.cellDesc}>Fiber optic infra</div>
        </div>

        {/* Backup */}
        <div className={`${styles.cell} ${styles.cellOrange}`}>
          <div className={styles.cellIcon}>💾</div>
          <div className={styles.cellTitle}>Backup</div>
          <div className={styles.cellDesc}>Auto daily</div>
        </div>
      </div>
    </section>
  );
}
