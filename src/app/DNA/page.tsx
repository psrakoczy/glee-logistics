"use client";
import { useEffect, useState } from "react";
import { translations, Lang } from "../../translations";

function detectLang(): Lang {
  if (typeof navigator === "undefined") return "de";
  const lang = navigator.language || "de";
  return lang.startsWith("de") ? "de" : "en";
}

export default function DNA() {
  const [lang, setLang] = useState<Lang>("de");

  useEffect(() => {
    setLang(detectLang());
  }, []);

  const t = translations[lang];
  const d = t.dna;

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#f5f5f3", minHeight: "100vh", color: "#1a1a1a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Inter:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .nav { background: rgba(245,245,243,0.97); padding: 1.1rem 2rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e8e8e4; position: sticky; top: 0; z-index: 100; }
        .nav-logo { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 1.4rem; text-transform: uppercase; letter-spacing: 0.05em; color: #1a1a1a; text-decoration: none; }
        .nav-logo span { color: #888; font-weight: 400; }
        .nav-right { display: flex; align-items: center; gap: 1rem; }
        .nav-back { font-size: 0.72rem; color: #888; text-decoration: none; letter-spacing: 0.1em; text-transform: uppercase; font-family: 'Inter', sans-serif; }
        .lang-toggle { display: flex; align-items: center; border: 1px solid #d0d0cc; overflow: hidden; }
        .lang-btn { padding: 0.35rem 0.65rem; cursor: pointer; border: none; background: transparent; font-size: 0.72rem; font-family: 'Inter', sans-serif; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: #888; transition: all 0.2s; }
        .lang-btn.active { background: #1a1a1a; color: #fff; }
        .hero { background: #1a1a1a; padding: 6rem 4rem; }
        .eyebrow { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin-bottom: 1rem; font-family: 'Inter', sans-serif; display: flex; align-items: center; gap: 0.75rem; }
        .eyebrow::before { content: ''; display: block; width: 28px; height: 1px; background: #555; }
        .hero-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: clamp(3.5rem, 7vw, 6rem); text-transform: uppercase; letter-spacing: 0.01em; color: #fff; line-height: 0.95; margin-bottom: 1.5rem; }
        .hero-title em { font-style: normal; color: #666; font-weight: 400; }
        .hero-sub { font-size: 1rem; color: #888; line-height: 1.75; font-weight: 300; max-width: 600px; font-family: 'Inter', sans-serif; }
        .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: #e0e0de; }
        .card { padding: 2.5rem 2.5rem; background: #fff; transition: background 0.2s; }
        .card:nth-child(odd) { background: #f5f5f3; }
        .card:hover { background: #efefed; }
        .num { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 2rem; color: #e0e0de; line-height: 1; margin-bottom: 0.75rem; }
        .p-title { font-size: 1rem; font-weight: 500; color: #1a1a1a; margin-bottom: 0.6rem; font-family: 'Inter', sans-serif; }
        .p-body { font-size: 0.875rem; color: #666; line-height: 1.7; font-weight: 300; font-family: 'Inter', sans-serif; }
        footer { background: #0f0f0f; padding: 2rem 4rem; display: flex; justify-content: space-between; align-items: center; }
        .footer-logo { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 1.1rem; color: #fff; text-transform: uppercase; letter-spacing: 0.06em; }
        .footer-right { display: flex; gap: 2rem; align-items: center; }
        .footer-right a { font-size: 0.78rem; color: #666; text-decoration: none; font-family: 'Inter', sans-serif; }
        .footer-copy { font-size: 0.75rem; color: #444; font-family: 'Inter', sans-serif; }
        @media (max-width: 768px) {
          .hero { padding: 4rem 1.5rem; }
          .grid { grid-template-columns: 1fr; }
          .card { padding: 2rem 1.5rem; }
          footer { flex-direction: column; gap: 1rem; padding: 1.5rem; text-align: center; }
          .footer-right { flex-direction: column; gap: 0.75rem; }
        }
        @media (max-width: 480px) { .nav { padding: 0.9rem 1.25rem; } }
      `}</style>

      <nav className="nav">
        <a href="/" className="nav-logo">GLEE <span>Logistics</span></a>
        <div className="nav-right">
          <div className="lang-toggle">
            <button className={`lang-btn${lang === "de" ? " active" : ""}`} onClick={() => setLang("de")}>DE</button>
            <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>EN</button>
          </div>
          <a href="/" className="nav-back">{d.backHome}</a>
        </div>
      </nav>

      <section className="hero">
        <div className="eyebrow">{d.eyebrow}</div>
        <h1 className="hero-title">{d.title1}<br /><em>{d.title2}</em></h1>
        <p className="hero-sub">{d.sub}</p>
      </section>

      <div className="grid">
        {d.principles.map((p) => (
          <div className="card" key={p.num}>
            <div className="num">{p.num}</div>
            <div className="p-title">{p.title}</div>
            <div className="p-body">{p.body}</div>
          </div>
        ))}
      </div>

      <footer>
        <div className="footer-logo">GLEE Logistics GmbH</div>
        <div className="footer-right">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/careers">{t.nav.careers}</a>
          <a href="/dna">DNA</a>
          <span className="footer-copy">© {new Date().getFullYear()} GLEE Logistics GmbH. {t.footer.copy}</span>
        </div>
      </footer>
    </main>
  );
}
