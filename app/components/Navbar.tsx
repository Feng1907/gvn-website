"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLang } from "./LangContext";
import styles from "./Navbar.module.css";

const productDropdown = {
  vi: [
    { label: "Sản phẩm CNTT – Công Trình", href: "/products?cat=cntt-cong-trinh" },
    { label: "Thiết Bị Chuyên Dụng Cho Ngân Hàng", href: "/products?cat=ngan-hang" },
    { label: "Giải pháp – Phần mềm cho doanh nghiệp", href: "/products?cat=giai-phap-phan-mem" },
  ],
  en: [
    { label: "IT & Construction Products", href: "/products?cat=cntt-cong-trinh" },
    { label: "Specialized Banking Equipment", href: "/products?cat=ngan-hang" },
    { label: "Software Solutions for Business", href: "/products?cat=giai-phap-phan-mem" },
  ],
};

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isVi = lang === "vi";

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navItems = [
    { label: t.nav.home,     href: "/",          active: true  },
    { label: t.nav.about,    href: "/about"                    },
    { label: t.nav.services, href: "/services"                 },
    { label: t.nav.products, href: "/products",  dropdown: true },
    { label: t.nav.projects, href: "/projects"                 },
    { label: t.nav.news,     href: "/news"                     },
    { label: t.nav.contact,  href: "/contact"                  },
  ];

  const ddItems = isVi ? productDropdown.vi : productDropdown.en;

  return (
    <>
      <nav className={styles.navbar}>
        {/* Logo */}
        <Link className={styles.logo} href="/">
          <div className={styles.logoCircle}>GVN</div>
          <div>
            <div className={styles.logoText}>GVNTMC</div>
            <div className={styles.logoSub}>CÔNG NGHỆ TOÀN CẦU VN</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className={styles.navLinks}>
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className={styles.dropdownWrap}
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${dropdownOpen ? styles.active : ""}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {item.label}
                  <span className={`${styles.arrow} ${dropdownOpen ? styles.arrowUp : ""}`}>▾</span>
                </Link>

                {dropdownOpen && (
                  <div className={styles.dropdown}>
                    {ddItems.map((dd) => (
                      <Link key={dd.href} href={dd.href} className={styles.ddItem}>
                        {dd.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.navLink} ${item.active ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Right */}
        <div className={styles.navRight}>
          <div className={styles.langGroup}>
            <button
              className={`${styles.langBtn} ${lang === "vi" ? styles.langActive : ""}`}
              onClick={() => setLang("vi")}
            >VN</button>
            <button
              className={`${styles.langBtn} ${lang === "en" ? styles.langActive : ""}`}
              onClick={() => setLang("en")}
            >GB</button>
          </div>

          <button className="btn-primary">{t.nav.quote}</button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className={styles.mobileLang}>
            <button
              className={`${styles.langBtn} ${lang === "vi" ? styles.langActive : ""}`}
              onClick={() => { setLang("vi"); setMenuOpen(false); }}
            >VN</button>
            <button
              className={`${styles.langBtn} ${lang === "en" ? styles.langActive : ""}`}
              onClick={() => { setLang("en"); setMenuOpen(false); }}
            >GB</button>
          </div>
        </div>
      )}
    </>
  );
}