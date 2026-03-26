"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "01",
    title: "Last Mile Delivery",
    desc: "Reliable, tracked delivery to your customers' doors — next day guaranteed.",
  },
  {
    icon: "02",
    title: "Transportation",
    desc: "Full-load and part-load transport across Germany and Europe.",
  },
  {
    icon: "03",
    title: "Car Rental",
    desc: "Flexible vehicle hire for businesses and individuals.",
  },
  {
    icon: "04",
    title: "HR & Outsourcing",
    desc: "Workforce solutions, recruitment, and HR consulting tailored to logistics.",
  },
  {
    icon: "05",
    title: "Automotive Retail",
    desc: "Vehicle sales and related services, delivered with next-day logistics.",
  },
  {
    icon: "06",
    title: "Logistics Solutions",
    desc: "End-to-end supply chain management and process optimisation.",
  },
];

const partners = [
  "Amazon Logistics",
  "DPD Deutschland",
  "Smiles Delivery GmbH",
  "We Drive GmbH",
  "Andone GmbH",
  "MELY Logistics GmbH",
];

const stats = [
  { value: "5+", label: "Strategic Partners" },
  { value: "6", label: "Service Lines" },
  { value: "24h", label: "Next Day Delivery" },
  { value: "DE", label: "Germany-Based" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#f5f5f3", color: "#1a1a1a" }}>
      {/* Google Fonts */}
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
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-size: 1.5rem;
          letter-spacing: -0.5px;
          color: #1a1a1a;
          text-decoration: none;
        }
        .nav-logo span { color: #888; font-style: normal; font-weight: 400; }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a { font-size: 0.8rem; color: #555; text-decoration: none; letter-spacing: 0.06em; text-transform: uppercase; font-weight: 500; font-family: 'Inter', sans-serif; transition: color 0.2s; }
        .nav-links a:hover { color: #1a1a1a; }
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
        .hamburger span {
          display: block; width: 22px; height: 1.5px; background: #1a1a1a;
          transition: all 0.25s;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
        .mobile-menu {
          display: none; position: fixed; top: 60px; left: 0; right: 0; bottom: 0;
          background: rgba(245,245,243,0.98); backdrop-filter: blur(12px);
          z-index: 99; flex-direction: column; align-items: center; justify-content: center;
          gap: 2.5rem;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          font-size: 1.5rem; font-family: 'DM Serif Display', serif;
          color: #1a1a1a; text-decoration: none; letter-spacing: -0.01em;
        }
        .mobile-menu a:hover { color: #555; }

        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding-top: 80px;
          overflow: hidden;
        }
        .hero-left {
          padding: 6rem 3rem 4rem 4rem;
          display: flex; flex-direction: column; justify-content: center;
        }
        .hero-eyebrow {
          font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: #888; margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .hero-eyebrow::before {
          content: ''; display: block; width: 32px; height: 1px; background: #888;
        }
        .hero-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: clamp(3.5rem, 6vw, 6rem);
          line-height: 0.95;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #0f0f0f;
          margin-bottom: 1.75rem;
        }
        .hero-headline em { font-style: normal; color: #888; font-weight: 400; }
        .hero-sub {
          font-size: 1rem; color: #555; line-height: 1.7;
          max-width: 420px; margin-bottom: 2.5rem; font-weight: 300; font-family: 'Inter', sans-serif;
        }
        .hero-actions { display: flex; gap: 1rem; align-items: center; }
        .btn-primary {
          background: #1a1a1a; color: #fff; border: 1.5px solid #1a1a1a;
          padding: 0.85rem 2rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif;
          cursor: pointer; letter-spacing: 0.02em; transition: all 0.2s;
          text-decoration: none; display: inline-block;
        }
        .btn-primary:hover { background: #333; border-color: #333; }
        .btn-ghost {
          background: transparent; color: #1a1a1a; border: 1.5px solid #d0d0d0;
          padding: 0.85rem 2rem; font-size: 0.9rem; font-family: 'Inter', sans-serif;
          cursor: pointer; letter-spacing: 0.02em; transition: all 0.2s;
          text-decoration: none; display: inline-block;
        }
        .btn-ghost:hover { border-color: #1a1a1a; }

        .hero-right {
          background: #1a1a1a;
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .hero-right-inner {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          justify-content: flex-end; padding: 3rem;
        }
        .hero-stat-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: #333;
        }
        .hero-stat {
          background: #1a1a1a; padding: 2rem 1.5rem;
        }
        .hero-stat-val {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 2.8rem; color: #fff; line-height: 1;
          margin-bottom: 0.4rem;
        }
        .hero-stat-label {
          font-size: 0.75rem; color: #888; letter-spacing: 0.1em; text-transform: uppercase;
        }
        .hero-grid-pattern {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          opacity: 0.04;
          background-image: repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 60px);
        }

        .section { padding: 6rem 4rem; }
        .section-label {
          font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: #888; margin-bottom: 1rem;
        }
        .section-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: clamp(2.2rem, 3.5vw, 3.2rem);
          line-height: 1.0; color: #0f0f0f; letter-spacing: 0.01em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .section-title em { font-style: normal; color: #aaa; font-weight: 400; }

        .services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
          background: #e0e0de; margin-top: 4rem;
        }
        .service-card {
          background: #f5f5f3; padding: 2.5rem 2rem;
          transition: background 0.2s;
        }
        .service-card:hover { background: #efefed; }
        .service-icon { font-size: 0.7rem; font-weight: 500; color: #aaa; letter-spacing: 0.08em; margin-bottom: 1.25rem; }
        .service-title { font-size: 1rem; font-weight: 500; margin-bottom: 0.6rem; color: #1a1a1a; }
        .service-desc { font-size: 0.875rem; color: #666; line-height: 1.65; font-weight: 300; }

        .about-section {
          background: #1a1a1a; color: #fff;
        }
        .about-inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center;
        }
        .about-section .section-label { color: #666; }
        .about-section .section-title { color: #fff; }
        .about-section .section-title em { color: #666; }
        .about-body {
          font-size: 0.95rem; color: #aaa; line-height: 1.8; font-weight: 300;
          margin-top: 1.5rem;
        }

        .partners-section { background: #fff; }
        .partners-list {
          display: flex; flex-wrap: wrap; gap: 1px;
          background: #e0e0de; margin-top: 3rem;
        }
        .partner-item {
          background: #fff; flex: 1 1 200px;
          padding: 1.75rem 2rem;
          font-size: 0.875rem; font-weight: 500; color: #333;
          letter-spacing: 0.01em;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .partner-item::before {
          content: ''; display: block;
          width: 6px; height: 6px; background: #ccc; border-radius: 50%; flex-shrink: 0;
        }

        .contact-section {
          background: #f0efe9;
          display: grid; grid-template-columns: 1fr 1fr; gap: 0;
        }
        .contact-left {
          padding: 6rem 4rem;
          border-right: 1px solid #e0e0de;
        }
        .contact-right {
          padding: 6rem 4rem;
          display: flex; flex-direction: column; justify-content: center;
        }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }
        .form-input {
          border: 1px solid #d0d0cc; background: #fff; padding: 0.85rem 1rem;
          font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: #1a1a1a;
          outline: none; transition: border-color 0.2s;
        }
        .form-input:focus { border-color: #1a1a1a; }
        .form-input::placeholder { color: #aaa; }

        footer {
          background: #0f0f0f; color: #666;
          padding: 3rem 4rem;
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.8rem; letter-spacing: 0.02em;
        }
        footer .footer-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 1.2rem; color: #fff;
        }

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

        /* ── Large mobile / small tablet (≤768px) ── */
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

          footer { flex-direction: column; gap: 1rem; text-align: center; padding: 2rem 1.5rem; }
          footer > div { flex-direction: column; gap: 0.75rem; }
        }

        /* ── Mobile (≤480px) ── */
        @media (max-width: 480px) {
          .nav-logo { font-size: 1.2rem; }
          .nav-cta { padding: 0.5rem 1rem; font-size: 0.8rem; }

          .hero-left { padding: 4.5rem 1.25rem 2rem; }
          .hero-headline { font-size: clamp(2rem, 10vw, 2.8rem); }
          .hero-eyebrow { font-size: 0.65rem; }
          .hero-actions { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
          .btn-primary, .btn-ghost { width: 100%; text-align: center; padding: 0.9rem 1.5rem; }
          .hero-right { min-height: 220px; }
          .hero-stat-grid { grid-template-columns: 1fr 1fr; }
          .hero-stat-val { font-size: 1.6rem; }

          .section { padding: 2.5rem 1.25rem; }
          .section-title { font-size: clamp(1.6rem, 7vw, 2rem); }
          .services-grid { grid-template-columns: 1fr; }
          .service-card { padding: 1.75rem 1.25rem; }

          .about-body { font-size: 0.875rem; }

          .contact-left { padding: 2.5rem 1.25rem; }
          .contact-right { padding: 2.5rem 1.25rem; }
          .contact-form { gap: 0.75rem; }
        }
      `}</style>

      {/* Nav */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="nav-logo">GLEE <span>Logistics</span></a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
        <button className="nav-cta" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Get in Touch
        </button>
        <button className={`hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {["services","about","history","partners","contact"].map((s) => (
          <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)}
            style={{ textTransform: "capitalize" }}>{s}</a>
        ))}
      </div>

      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero-left">
          <div className="hero-eyebrow">Logistics & Mobility Solutions</div>
          <h1 className="hero-headline">
            Built to Move.<br /><em>Built to Grow.</em>
          </h1>
          <p className="hero-sub">
            GLEE Logistics GmbH delivers comprehensive logistics, transportation, HR outsourcing, and automotive services — with next-day delivery as standard.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#contact" className="btn-ghost">Contact Us</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-grid-pattern" />
          <div className="hero-right-inner">
            <div className="hero-stat-grid">
              {stats.map((s) => (
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
        <div className="section-label">What We Do</div>
        <h2 className="section-title">Six ways we <em>serve you</em></h2>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
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
            <div className="section-label">About GLEE</div>
            <h2 className="section-title">Built for the <em>demands</em> of modern logistics</h2>
            <p className="about-body">
              GLEE Logistics GmbH is a Germany-based logistics company combining deep operational expertise with a commitment to reliability. From first-mile to last-mile, from vehicle hire to workforce solutions — we are the single partner that grows with your business.
            </p>
            <p className="about-body" style={{ marginTop: "1rem" }}>
              Our team brings together specialists in supply chain, automotive retail, and HR consulting, enabling us to serve clients across industries with speed and precision.
            </p>
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#333" }}>
              {["Reliable", "Flexible", "Fast", "Trusted"].map((v) => (
                <div key={v} style={{ background: "#222", padding: "2rem 1.5rem" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, textTransform: "uppercase", fontSize: "1.5rem", color: "#fff", marginBottom: "0.4rem" }}>{v}</div>
                  <div style={{ fontSize: "0.75rem", color: "#666", letterSpacing: "0.1em", textTransform: "uppercase" }}>Our commitment</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section" id="history" style={{ background: "#fff" }}>
        <div className="section-label">Our Story</div>
        <h2 className="section-title">From <em>8 to 80</em> — in three years</h2>
        <p style={{ marginTop: "1rem", fontSize: "0.95rem", color: "#666", lineHeight: "1.8", fontWeight: 300, maxWidth: "640px" }}>
          What started as a small, determined team in 2022 has grown into one of Germany's most agile logistics operators. We didn't scale by accident — we scaled by doing the work right, every time.
        </p>
        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "#e0e0de" }}>
          {[
            { year: "2022", title: "Founded", body: "GLEE Logistics GmbH was established with 8 employees and a clear mission: deliver logistics solutions that actually work. From day one, reliability was non-negotiable." },
            { year: "2023", title: "Expanding", body: "We doubled our team, added transportation and car rental to our portfolio, and signed our first major partnerships — including Amazon Logistics Deutschland and DPD Deutschland." },
            { year: "2024", title: "Automotive Retail", body: "We launched our own automotive retail division — backed by our in-house next-day delivery network. Customers could now order a vehicle and have it at their door the very next day." },
            { year: "2025", title: "80 Strong", body: "Three years in, we operate across six service lines with 80 employees, trusted by leading logistics and mobility companies across Germany. The journey has only just begun." },
          ].map((item) => (
            <div key={item.year} style={{ background: "#fff", padding: "2.5rem 2rem" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "2.8rem", color: "#e0e0de", lineHeight: 1, marginBottom: "0.75rem" }}>{item.year}</div>
              <div style={{ fontSize: "1rem", fontWeight: 500, color: "#1a1a1a", marginBottom: "0.6rem" }}>{item.title}</div>
              <div style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.65, fontWeight: 300 }}>{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="section partners-section" id="partners">
        <div className="section-label">Trusted By</div>
        <h2 className="section-title">Our <em>partners</em></h2>
        <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#e0e0de" }}>
          {partners.map((p) => (
            <div key={p} style={{ background: "#f5f5f3", padding: "1.75rem 2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "6px", height: "6px", background: "#1a1a1a", borderRadius: "50%", flexShrink: 0 }} />
              <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#333", letterSpacing: "0.01em", lineHeight: 1.4 }}>{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="contact-left">
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's work<br /><em>together</em></h2>
          <p style={{ marginTop: "1.5rem", fontSize: "0.95rem", color: "#666", lineHeight: "1.8", fontWeight: 300 }}>
            Whether you need a logistics partner, a vehicle fleet, or HR support — we'd love to hear from you. Reach out and our team will respond within 24 hours.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ fontSize: "0.875rem", color: "#888" }}>📍 Germany</div>
            <div style={{ fontSize: "0.875rem", color: "#888" }}>✉️ info@gleelogistics.de</div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-form">
            <input className="form-input" type="text" placeholder="Your name" />
            <input className="form-input" type="email" placeholder="Email address" />
            <input className="form-input" type="text" placeholder="Company" />
            <textarea className="form-input" placeholder="How can we help?" rows={4} style={{ resize: "vertical" }} />
            <button className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>
              Send Message →
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
          <span>© {new Date().getFullYear()} GLEE Logistics GmbH. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
