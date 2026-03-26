"use client";
import { useEffect, useRef, useState } from "react";
import { translations, Lang } from "../translations";

const partners = [
  "Amazon Logistics",
  "DPD Deutschland",
  "Smiles Delivery GmbH",
  "We Drive GmbH",
  "Andone GmbH",
  "MELY Logistics GmbH",
];

function detectLang(): Lang {
  if (typeof navigator === "undefined") return "de";
  const lang = navigator.language || "de";
  return lang.startsWith("de") ? "de" : "en";
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("de");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLang(detectLang());
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = translations[lang];

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#f5f5f3", color: "#1a1a1a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Inter:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 1.25rem 2rem;
          display: flex; align-items: center; justify-content: space-between;
          transition: background 0.3s, box-shadow 0.3s;
        }
        .nav.scrolled {
          background: rgba(245,245,243,0.92);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.07);
        }
        .nav-logo {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 1.5rem;
          letter-spacing: 0.04em; text-transform: uppercase;
          color: #1a1a1a; text-decoration: none;
        }
        .nav-logo span { color: #888; font-weight: 400; }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a { font-size: 0.8rem; color: #555; text-decoration: none; letter-spacing: 0.06em; text-transform: uppercase; font-weight: 500; font-family: 'Inter', sans-serif; transition: color 0.2s; }
        .nav-links a:hover { color: #1a1a1a; }
        .nav-right { display: flex; align-items: center; gap: 1rem; }
        .lang-toggle {
          display: flex; align-items: center; gap: 0; border: 1px solid #d0d0cc;
          font-size: 0.72rem; font-family: 'Inter', sans-serif; overflow: hidden;
        }
        .lang-btn {
          padding: 0.35rem 0.65rem; cursor: pointer; border: none;
          background: transparent; font-size: 0.72rem; font-family: 'Inter', sans-serif;
          font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase;
          color: #888; transition: all 0.2s;
        }
        .lang-btn.active { background: #1a1a1a; color: #fff; }
        .nav-cta {
          background: #1a1a1a; color: #fff; border: none; cursor: pointer;
          padding: 0.6rem 1.4rem; font-size: 0.875rem; font-family: 'Inter', sans-serif;
          letter-spacing: 0.02em; transition: background 0.2s;
        }
        .nav-cta:hover { background: #333; }
        .hamburger {
          display: none; flex-direction: column; gap: 5px; cursor: pointer;
          background: none; border: none; padding: 4px;
        }
        .hamburger span { display: block; width: 22px; height: 1.5px; background: #1a1a1a; transition: all 0.25s; }
        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
        .mobile-menu {
          display: none; position: fixed; top: 60px; left: 0; right: 0; bottom: 0;
          background: rgba(245,245,243,0.98); backdrop-filter: blur(12px);
          z-index: 99; flex-direction: column; align-items: center; justify-content: center; gap: 2.5rem;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a { font-size: 1.5rem; font-family: 'Barlow Condensed', sans-serif; color: #1a1a1a; text-decoration: none; letter-spacing: 0.04em; text-transform: uppercase; }

        .hero {
          min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr;
          gap: 0; padding-top: 80px; overflow: hidden;
        }
        .hero-left { padding: 6rem 3rem 4rem 4rem; display: flex; flex-direction: column; justify-content: center; }
        .hero-eyebrow {
          font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: #888; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; font-family: 'Inter', sans-serif;
        }
        .hero-eyebrow::before { content: ''; display: block; width: 32px; height: 1px; background: #888; }
        .hero-headline {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: clamp(3.5rem, 6vw, 6rem); line-height: 0.95;
          letter-spacing: 0.01em; text-transform: uppercase; color: #0f0f0f; margin-bottom: 1.75rem;
        }
        .hero-headline em { font-style: normal; color: #aaa; font-weight: 400; }
        .hero-sub { font-size: 1rem; color: #555; line-height: 1.7; max-width: 420px; margin-bottom: 2.5rem; font-weight: 300; font-family: 'Inter', sans-serif; }
        .hero-actions { display: flex; gap: 1rem; align-items: center; }
        .btn-primary {
          background: #1a1a1a; color: #fff; border: 1.5px solid #1a1a1a;
          padding: 0.85rem 2rem; font-size: 0.9rem; font-family: 'Inter', sans-serif;
          cursor: pointer; letter-spacing: 0.02em; transition: all 0.2s; text-decoration: none; display: inline-block;
        }
        .btn-primary:hover { background: #333; border-color: #333; }
        .btn-ghost {
          background: transparent; color: #1a1a1a; border: 1.5px solid #d0d0d0;
          padding: 0.85rem 2rem; font-size: 0.9rem; font-family: 'Inter', sans-serif;
          cursor: pointer; letter-spacing: 0.02em; transition: all 0.2s; text-decoration: none; display: inline-block;
        }
        .btn-ghost:hover { border-color: #1a1a1a; }
        .hero-right { background: #1a1a1a; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .hero-right-inner { width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; padding: 3rem; }
        .hero-stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #333; }
        .hero-stat { background: #1a1a1a; padding: 2rem 1.5rem; }
        .hero-stat-val { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 2.8rem; color: #fff; line-height: 1; margin-bottom: 0.4rem; }
        .hero-stat-label { font-size: 0.75rem; color: #888; letter-spacing: 0.1em; text-transform: uppercase; font-family: 'Inter', sans-serif; }
        .hero-grid-pattern {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.04;
          background-image: repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 60px);
        }

        .section { padding: 6rem 4rem; }
        .section-label { font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: #888; margin-bottom: 1rem; font-family: 'Inter', sans-serif; }
        .section-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: clamp(2.2rem, 3.5vw, 3.2rem); line-height: 1.0; color: #0f0f0f;
          letter-spacing: 0.01em; text-transform: uppercase; margin-bottom: 1rem;
        }
        .section-title em { font-style: normal; color: #aaa; font-weight: 400; }

        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: #e0e0de; margin-top: 4rem; }
        .service-card { background: #f5f5f3; padding: 2.5rem 2rem; transition: background 0.2s; }
        .service-card:hover { background: #efefed; }
        .service-icon { font-size: 0.7rem; font-weight: 500; color: #aaa; letter-spacing: 0.08em; margin-bottom: 1.25rem; font-family: 'Inter', sans-serif; }
        .service-title { font-size: 1rem; font-weight: 500; margin-bottom: 0.6rem; color: #1a1a1a; font-family: 'Inter', sans-serif; }
        .service-desc { font-size: 0.875rem; color: #666; line-height: 1.65; font-weight: 300; font-family: 'Inter', sans-serif; }

        .about-section { background: #1a1a1a; color: #fff; }
        .about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .about-section .section-label { color: #666; }
        .about-section .section-title { color: #fff; }
        .about-section .section-title em { color: #666; }
        .about-body { font-size: 0.95rem; color: #aaa; line-height: 1.8; font-weight: 300; margin-top: 1.5rem; font-family: 'Inter', sans-serif; }

        .partners-section { background: #fff; }
        .contact-section { background: #f0efe9; display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
        .contact-left { padding: 6rem 4rem; border-right: 1px solid #e0e0de; }
        .contact-right { padding: 6rem 4rem; display: flex; flex-direction: column; justify-content: center; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }
        .form-input {
          border: 1px solid #d0d0cc; background: #fff; padding: 0.85rem 1rem;
          font-size: 0.9rem; font-family: 'Inter', sans-serif; color: #1a1a1a; outline: none; transition: border-color 0.2s;
        }
        .form-input:focus { border-color: #1a1a1a; }
        .form-input::placeholder { color: #aaa; }

        footer { background: #0f0f0f; color: #666; padding: 3rem 4rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; letter-spacing: 0.02em; }
        .footer-logo { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 1.1rem; color: #fff; text-transform: uppercase; letter-spacing: 0.06em; }

        /* ── Tablet (≤1024px) ── */
        @media (max-width: 1024px) {
          .hero { grid-template-columns: 1fr 1fr; }
          .hero-left { padding: 4rem 2rem 3rem 2.5rem; }
          .hero-right-inner { padding: 2rem; }
          .section { padding: 4.5rem 2.5rem; }
          .contact-left { padding: 4rem 2.5rem; }
          .contact-right { padding: 4rem 2.5rem; }
          .about-inner { gap: 3rem; }
        }
        /* ── Large mobile (≤768px) ── */
        @media (max-width: 768px) {
          .nav { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-left { padding: 5rem 1.5rem 2.5rem; }
          .hero-headline { font-size: clamp(2.4rem, 8vw, 3.5rem); }
          .hero-sub { max-width: 100%; }
          .hero-right { min-height: 260px; }
          .hero-right-inner { padding: 1.5rem; }
          .hero-stat-grid { grid-template-columns: repeat(4, 1fr); }
          .hero-stat { padding: 1.25rem 1rem; }
          .hero-stat-val { font-size: 1.8rem; }
          .section { padding: 3.5rem 1.5rem; }
          .services-grid { grid-template-columns: 1fr 1fr; }
          .about-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .contact-section { grid-template-columns: 1fr; }
          .contact-left { padding: 3rem 1.5rem; border-right: none; border-bottom: 1px solid #e0e0de; }
          .contact-right { padding: 3rem 1.5rem; }
          footer { flex-direction: column; gap: 1rem; padding: 2rem 1.5rem; }
          footer > div { flex-direction: column; gap: 0.75rem; }
        }
        /* ── Mobile (≤480px) ── */
        @media (max-width: 480px) {
          .nav-logo { font-size: 1.2rem; }
          .nav-cta { display: none; }
          .hero-left { padding: 4.5rem 1.25rem 2rem; }
          .hero-headline { font-size: clamp(2rem, 10vw, 2.8rem); }
          .hero-actions { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
          .btn-primary, .btn-ghost { width: 100%; text-align: center; padding: 0.9rem 1.5rem; }
          .hero-right { min-height: 220px; }
          .hero-stat-grid { grid-template-columns: 1fr 1fr; }
          .section { padding: 2.5rem 1.25rem; }
          .section-title { font-size: clamp(1.6rem, 7vw, 2rem); }
          .services-grid { grid-template-columns: 1fr; }
          .service-card { padding: 1.75rem 1.25rem; }
          .contact-left { padding: 2.5rem 1.25rem; }
          .contact-right { padding: 2.5rem 1.25rem; }
        }
      `}</style>

      {/* Nav */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="nav-logo">GLEE <span>Logistics</span></a>
        <ul className="nav-links">
          <li><a href="#services">{t.nav.services}</a></li>
          <li><a href="#about">{t.nav.about}</a></li>
          <li><a href="#history">{t.nav.history}</a></li>
          <li><a href="#partners">{t.nav.partners}</a></li>
          <li><a href="#contact">{t.nav.contact}</a></li>
          <li><a href="/careers">{t.nav.careers}</a></li>
          <li><a href="/dna">{t.nav.dna}</a></li>
        </ul>
        <div className="nav-right">
          <div className="lang-toggle">
            <button className={`lang-btn${lang === "de" ? " active" : ""}`} onClick={() => setLang("de")}>DE</button>
            <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>EN</button>
          </div>
          <button className="nav-cta" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            {t.nav.cta}
          </button>
          <button className={`hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {[
          { key: "services", href: "#services" },
          { key: "about", href: "#about" },
          { key: "history", href: "#history" },
          { key: "partners", href: "#partners" },
          { key: "contact", href: "#contact" },
          { key: "careers", href: "/careers" },
          { key: "dna", href: "/dna" },
        ].map((item) => (
          <a key={item.key} href={item.href} onClick={() => setMenuOpen(false)}>
            {t.nav[item.key as keyof typeof t.nav]}
          </a>
        ))}
        <div className="lang-toggle" style={{ marginTop: "1rem" }}>
          <button className={`lang-btn${lang === "de" ? " active" : ""}`} onClick={() => setLang("de")}>DE</button>
          <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>

      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero-left">
          <div className="hero-eyebrow">{t.hero.eyebrow}</div>
          <h1 className="hero-headline">
            {t.hero.headline1}<br /><em>{t.hero.headline2}</em>
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-actions">
            <a href="#services" className="btn-primary">{t.hero.btn1}</a>
            <a href="#contact" className="btn-ghost">{t.hero.btn2}</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-grid-pattern" />
          <div className="hero-right-inner">
            <div className="hero-stat-grid">
              {t.stats.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <div className="hero-stat-val">{s.value}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="section-label">{t.services.label}</div>
        <h2 className="section-title">{t.services.title1} <em>{t.services.title2}</em></h2>
        <div className="services-grid">
          {t.services.items.map((s) => (
            <div className="service-card" key={s.icon}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section about-section" id="about">
        <div className="about-inner">
          <div>
            <div className="section-label">{t.about.label}</div>
            <h2 className="section-title">{t.about.title1} <em>{t.about.title2}</em> {t.about.title3}</h2>
            <p className="about-body">{t.about.body1}</p>
            <p className="about-body" style={{ marginTop: "1rem" }}>{t.about.body2}</p>
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#333" }}>
              {t.about.values.map((v) => (
                <div key={v} style={{ background: "#222", padding: "2rem 1.5rem" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, textTransform: "uppercase", fontSize: "1.5rem", color: "#fff", marginBottom: "0.4rem" }}>{v}</div>
                  <div style={{ fontSize: "0.75rem", color: "#666", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>{t.about.valueLabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section" id="history" style={{ background: "#fff" }}>
        <div className="section-label">{t.history.label}</div>
        <h2 className="section-title">{t.history.title1} <em>{t.history.title2}</em></h2>
        <p style={{ marginTop: "1rem", fontSize: "0.95rem", color: "#666", lineHeight: "1.8", fontWeight: 300, maxWidth: "640px", fontFamily: "'Inter', sans-serif" }}>
          {t.history.sub}
        </p>
        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "#e0e0de" }}>
          {t.history.items.map((item) => (
            <div key={item.year} style={{ background: "#fff", padding: "2.5rem 2rem" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "2.8rem", color: "#e0e0de", lineHeight: 1, marginBottom: "0.75rem" }}>{item.year}</div>
              <div style={{ fontSize: "1rem", fontWeight: 500, color: "#1a1a1a", marginBottom: "0.6rem", fontFamily: "'Inter', sans-serif" }}>{item.title}</div>
              <div style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.65, fontWeight: 300, fontFamily: "'Inter', sans-serif" }}>{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="section partners-section" id="partners">
        <div className="section-label">{t.partners.label}</div>
        <h2 className="section-title">{t.partners.title1} <em>{t.partners.title2}</em></h2>
        <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#e0e0de" }}>
          {partners.map((p) => (
            <div key={p} style={{ background: "#fff", padding: "1.75rem 2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "6px", height: "6px", background: "#1a1a1a", borderRadius: "50%", flexShrink: 0 }} />
              <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#333", letterSpacing: "0.01em", lineHeight: 1.4, fontFamily: "'Inter', sans-serif" }}>{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="contact-left">
          <div className="section-label">{t.contact.label}</div>
          <h2 className="section-title">{t.contact.title1}<br /><em>{t.contact.title2}</em></h2>
          <p style={{ marginTop: "1.5rem", fontSize: "0.95rem", color: "#666", lineHeight: "1.8", fontWeight: 300, fontFamily: "'Inter', sans-serif" }}>
            {t.contact.sub}
          </p>
          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ fontSize: "0.875rem", color: "#888", fontFamily: "'Inter', sans-serif" }}>{t.contact.location}</div>
            <div style={{ fontSize: "0.875rem", color: "#888", fontFamily: "'Inter', sans-serif" }}>info@gleelogistics.de</div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-form">
            <input className="form-input" type="text" placeholder={t.contact.namePlaceholder} />
            <input className="form-input" type="email" placeholder={t.contact.emailPlaceholder} />
            <input className="form-input" type="text" placeholder={t.contact.companyPlaceholder} />
            <textarea className="form-input" placeholder={t.contact.messagePlaceholder} rows={4} style={{ resize: "vertical" }} />
            <button className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>
              {t.contact.send}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo">GLEE Logistics GmbH</div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <a href="/impressum" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", letterSpacing: "0.02em" }}>Impressum</a>
          <a href="/datenschutz" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", letterSpacing: "0.02em" }}>Datenschutz</a>
          <a href="/careers" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", letterSpacing: "0.02em" }}>{t.nav.careers}</a>
          <a href="/dna" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", letterSpacing: "0.02em" }}>{t.nav.dna}</a>
          <span>© {new Date().getFullYear()} GLEE Logistics GmbH. {t.footer.copy}</span>
        </div>
      </footer>
    </main>
  );
}
