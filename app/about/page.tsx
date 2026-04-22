"use client";
import Link from "next/link";
import { useLang } from "@/components/LangContext";
import styles from "./page.module.css";

export default function AboutPage() {
  const { t } = useLang();
  const p = t.aboutPage;
  const s = p.sections;

  return (
    <div className={styles.page}>

      {/* ── SECTION 1: Intro text ── */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          {p.intro.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        <div className={styles.introCta}>
          <h2 className={styles.introCtaTitle}>{p.ctaTitle}</h2>
          <div className={styles.introCtaBtns}>
            <Link href="/contact" className={styles.btnBlue}>{p.ctaQuote}</Link>
            <Link href="/projects" className={styles.btnOutline}>{p.ctaProject}</Link>
          </div>
        </div>

        <div className={styles.projectImgs}>
          {[
            { emoji: "🏢", label: p.projectLabels[0] },
            { emoji: "📦", label: p.projectLabels[1] },
            { emoji: "🖥️", label: p.projectLabels[2] },
          ].map((item, i) => (
            <div key={i} className={styles.projectImg}>
              <span className={styles.projectEmoji}>{item.emoji}</span>
              <span className={styles.projectLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 2: Về chúng tôi ── */}
      <section className={styles.aboutSection}>
        <div className={styles.twoCol}>
          <div className={styles.textCol}>
            <h2 className={styles.sectionTitle}>{s.about.title}</h2>
            <p>{s.about.sub}</p>
            <ul className={styles.bulletList}>
              {s.about.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.roundImg}><span style={{ fontSize: 80 }}>🔧</span></div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Phương châm ── */}
      <section className={styles.mottoSection}>
        <div className={styles.twoColReverse}>
          <div className={styles.imgCol}>
            <div className={styles.roundImg} style={{ background: "linear-gradient(135deg,#e4faf0,#b8f0d8)" }}>
              <span style={{ fontSize: 80 }}>💡</span>
            </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.sectionTitle}>{s.motto.title}</h2>
            <p className={styles.subHeading}>{s.motto.sub}</p>
            <p>{s.motto.desc}</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Chiến lược ── */}
      <section className={styles.strategySection}>
        <div className={styles.twoCol}>
          <div className={styles.textCol}>
            <h2 className={styles.sectionTitle}>{s.strategy.title}</h2>
            <p className={styles.subHeading}>{s.strategy.sub}</p>
            <p>{s.strategy.desc}</p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.roundImg} style={{ background: "linear-gradient(135deg,#e8f0fb,#c0d8f8)" }}>
              <span style={{ fontSize: 80 }}>🏗️</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Khách hàng ── */}
      <section className={styles.customerSection}>
        <div className={styles.twoColReverse}>
          <div className={styles.imgCol}>
            <div className={styles.roundImg} style={{ background: "linear-gradient(135deg,#fff0e4,#ffd8b0)" }}>
              <span style={{ fontSize: 80 }}>👷</span>
            </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.sectionTitle}>{s.customer.title}</h2>
            <p className={styles.subHeading}>{s.customer.sub}</p>
            <p>{s.customer.desc}</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Kinh doanh ── */}
      <section className={styles.bizSection}>
        <div className={styles.twoCol}>
          <div className={styles.textCol}>
            <h2 className={styles.sectionTitle}>{s.business.title}</h2>
            <p className={styles.subHeading}>{s.business.sub}</p>
            <p>{s.business.desc}</p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.roundImg} style={{ background: "linear-gradient(135deg,#f0f0f0,#d8d8d8)" }}>
              <span style={{ fontSize: 80 }}>🤝</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <h2 className={styles.ctaTitle}>{p.ctaBanner.title}</h2>
        <p className={styles.ctaDesc}>{p.ctaBanner.desc}</p>
        <Link href="/contact" className={styles.ctaBtn}>{p.ctaBanner.btn}</Link>
      </section>

    </div>
  );
}