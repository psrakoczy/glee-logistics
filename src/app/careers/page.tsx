"use client";
import { useEffect, useState } from "react";
import { translations, Lang } from "../../translations";

function detectLang(): Lang {
  if (typeof navigator === "undefined") return "de";
  const lang = navigator.language || "de";
  return lang.startsWith("de") ? "de" : "en";
}

export default function Careers() {
  const [lang, setLang] = useState<Lang>("de");

  useEffect(() => {
    setLang(detectLang());
  }, []);

  const t = translations[lang];
  const c = t.careers;

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#f5f5f3", minHeight: "100vh", color: "#1a1a1a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Inter:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .nav { background: rgba(245,245,243,0.97); padding: 1.1rem 2rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e8e8e4; position: sticky; top: 0; z-index: 100; }
        .nav-logo { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 1.4rem; text-transform: uppercase; letter-spacing: 0.05em; color: #1a1a1a; text-decoration: none; }
        .nav-logo span { color: #888; font-weight: 400; }
        .nav-right { display: flex; align-items: center; gap: 1rem; }
        .nav-back { font-size: 0.72rem; color: #888; text-decoration: none; letter-spacing: 0.1em; text-transform: uppercase; font-family: 'Inter', sans-serif; }
        .lang-toggle { display: flex; align-items: center; border: 1px solid #d0d0cc; overflow: hidden; }
        .lang-btn { padding: 0.35rem 0.65rem; cursor: pointer; border: none; background: transparent; font-size: 0.72rem; font-family: 'Inter', sans-serif; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: #888; transition: all 0.2s; }
        .lang-btn.active { background: #1a1a1a; color: #fff; }
        .hero { background: #1a1a1a; padding: 6rem 4rem; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .hero-eyebrow { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem; font-family: 'Inter', sans-serif; }
        .hero-eyebrow::before { content: ''; display: block; width: 28px; height: 1px; background: #555; }
        .hero-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: clamp(3rem, 5vw, 5rem); line-height: 0.95; text-transform: uppercase; letter-spacing: 0.01em; color: #fff; margin-bottom: 1.75rem; }
        .hero-title em { font-style: normal; color: #666; font-weight: 400; }
        .hero-sub { font-size: 1rem; color: #888; line-height: 1.75; font-weight: 300; max-width: 420px; font-family: 'Inter', sans-serif; }
        .hero-right { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #333; }
        .hero-stat { background: #222; padding: 2rem 1.5rem; }
        .hero-stat-val { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 2.5rem; color: #fff; line-height: 1; margin-bottom: 0.4rem; }
        .hero-stat-label { font-size: 0.65rem; color: #666; text-transform: uppercase; letter-spacing: 0.1em; font-family: 'Inter', sans-serif; }
        .section { padding: 6rem 4rem; }
        .section-label { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: #888; margin-bottom: 0.75rem; font-family: 'Inter', sans-serif; }
        .section-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: clamp(2rem, 3vw, 2.8rem); text-transform: uppercase; letter-spacing: 0.01em; color: #0f0f0f; line-height: 1; }
        .section-title em { font-style: normal; color: #aaa; font-weight: 400; }
        .benefits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: #e0e0de; margin-top: 3rem; }
        .benefit-card { background: #f5f5f3; padding: 2.5rem 2rem; transition: background 0.2s; }
        .benefit-card:hover { background: #efefed; }
        .benefit-num { font-size: 0.65rem; font-weight: 500; color: #bbb; letter-spacing: 0.08em; margin-bottom: 1rem; font-family: 'Inter', sans-serif; }
        .benefit-title { font-size: 1rem; font-weight: 500; color: #1a1a1a; margin-bottom: 0.6rem; font-family: 'Inter', sans-serif; }
        .benefit-desc { font-size: 0.875rem; color: #666; line-height: 1.65; font-weight: 300; font-family: 'Inter', sans-serif; }
        .apply-section { background: #1a1a1a; display: grid; grid-template-columns: 1fr 1fr; }
        .apply-left { padding: 6rem 4rem; border-right: 1px solid #333; }
        .apply-right { padding: 6rem 4rem; display: flex; flex-direction: column; justify-content: center; }
        .apply-section .section-label { color: #555; }
        .apply-section .section-title { color: #fff; }
        .apply-section .section-title em { color: #555; }
        .apply-sub { font-size: 0.95rem; color: #888; line-height: 1.8; font-weight: 300; margin-top: 1.5rem; font-family: 'Inter', sans-serif; }
        .apply-email { display: inline-flex; align-items: center; gap: 0.75rem; margin-top: 2.5rem; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 1.4rem; text-transform: uppercase; letter-spacing: 0.04em; color: #fff; text-decoration: none; border-bottom: 1px solid #444; padding-bottom: 0.5rem; transition: border-color 0.2s, color 0.2s; }
        .apply-email:hover { color: #ccc; border-color: #666; }
        .apply-steps { display: flex; flex-direction: column; gap: 1px; }
        .apply-step { background: #222; padding: 1.5rem 2rem; display: flex; align-items: flex-start; gap: 1.25rem; }
        .step-num { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 1.5rem; color: #444; line-height: 1; flex-shrink: 0; margin-top: 0.1rem; }
        .step-title { font-size: 0.85rem; font-weight: 500; color: #fff; margin-bottom: 0.3rem; font-family: 'Inter', sans-serif; }
        .step-desc { font-size: 0.78rem; color: #666; line-height: 1.6; font-weight: 300; font-family: 'Inter', sans-serif; }
        footer { background: #0f0f0f; padding: 2rem 4rem; display: flex; justify-content: space-between; align-items: center; }
        .footer-logo { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 1.1rem; color: #fff; text-transform: uppercase; letter-spacing: 0.06em; }
        .footer-right { display: flex; gap: 2rem; align-items: center; }
        .footer-right a { font-size: 0.78rem; color: #666; text-decoration: none; font-family: 'Inter', sans-serif; }
        .footer-copy { font-size: 0.75rem; color: #444; font-family: 'Inter', sans-serif; }
        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr; padding: 4rem 1.5rem; gap: 2.5rem; }
          .hero-right { grid-template-columns: repeat(4, 1fr); }
          .section { padding: 3.5rem 1.5rem; }
          .benefits-grid { grid-template-columns: 1fr; }
          .apply-section { grid-template-columns: 1fr; }
          .apply-left { padding: 3rem 1.5rem; border-right: none; border-bottom: 1px solid #333; }
          .apply-right { padding: 3rem 1.5rem; }
          footer { flex-direction: column; gap: 1rem; padding: 1.5rem; text-align: center; }
          .footer-right { flex-direction: column; gap: 0.75rem; }
        }
        @media (max-width: 480px) {
          .hero-right { grid-template-columns: 1fr 1fr; }
          .nav { padding: 0.9rem 1.25rem; }
        }
      `}</style>

      <nav className="nav">
        <a href="/" className="nav-logo">GLEE <span>Logistics</span></a>
        <div className="nav-right">
          <div className="lang-toggle">
            <button className={`lang-btn${lang === "de" ? " active" : ""}`} onClick={() => setLang("de")}>DE</button>
            <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>EN</button>
          </div>
          <a href="/" className="nav-back">{c.backHome}</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="hero-eyebrow">{c.eyebrow}</div>
          <h1 className="hero-title">{c.title1}<br /><em>{c.title2}</em></h1>
          <p className="hero-sub">{c.sub}</p>
        </div>
        <div className="hero-right">
          {c.stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <div className="hero-stat-val">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="why">
        <div className="section-label">{c.whyLabel}</div>
        <h2 className="section-title">{c.whyTitle1} <em>{c.whyTitle2}</em></h2>
        <div className="benefits-grid">
          {c.benefits.map((b) => (
            <div className="benefit-card" key={b.num}>
              <div className="benefit-num">{b.num}</div>
              <div className="benefit-title">{b.title}</div>
              <div className="benefit-desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="apply-section" id="apply">
        <div className="apply-left">
          <div className="section-label">{c.applyLabel}</div>
          <h2 className="section-title">{c.applyTitle1} <em>{c.applyTitle2}</em></h2>
          <p className="apply-sub">{c.applySub}</p>
          <a href="mailto:hr@gleelogistics.de" className="apply-email">hr@gleelogistics.de →</a>
        </div>
        <div className="apply-right">
          <div className="apply-steps">
            <div className="apply-step">
              <div className="step-num">01</div>
              <div><div className="step-title">{c.step1Title}</div><div className="step-desc">{c.step1Desc}</div></div>
            </div>
            <div className="apply-step">
              <div className="step-num">02</div>
              <div><div className="step-title">{c.step2Title}</div><div className="step-desc">{c.step2Desc}</div></div>
            </div>
            <div className="apply-step">
              <div className="step-num">03</div>
              <div><div className="step-title">{c.step3Title}</div><div className="step-desc">{c.step3Desc}</div></div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <div className="footer-logo">GLEE Logistics GmbH</div>
          <div style={{ fontSize: "0.78rem", color: "#555", fontFamily: "'Inter', sans-serif" }}>Schloßstraße 110, 12163 Berlin</div>
          <a href="mailto:info@gleelogistics.de" style={{ fontSize: "0.78rem", color: "#555", textDecoration: "none", fontFamily: "'Inter', sans-serif" }}>info@gleelogistics.de</a>
        </div>
        <div className="footer-right">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/careers">{t.nav.careers}</a>
          <a href="/dna">{t.nav.dna}</a>
          <span className="footer-copy">© {new Date().getFullYear()} GLEE Logistics GmbH. {t.footer.copy}</span>
        </div>
      </footer>
    </main>
  );
}
