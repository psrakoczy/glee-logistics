export default function Careers() {
  const benefits = [
    { num: "01", title: "Competitive Salary", desc: "We offer fair, market-rate compensation that reflects your skills and experience." },
    { num: "02", title: "Flexible Working Hours", desc: "We trust our people. Work in a way that fits your life without compromising results." },
    { num: "03", title: "Growth & Development", desc: "We invest in our team. From hands-on experience to new responsibilities — there is always room to grow at GLEE." },
    { num: "04", title: "Diverse & International Team", desc: "We are proud of our multicultural team. Different backgrounds, one shared drive to deliver." },
  ];

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#f5f5f3", minHeight: "100vh", color: "#1a1a1a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Inter:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        .nav {
          background: rgba(245,245,243,0.97);
          padding: 1.1rem 2rem;
          display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid #e8e8e4;
          position: sticky; top: 0; z-index: 100;
        }
        .nav-logo {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 1.4rem;
          text-transform: uppercase; letter-spacing: 0.05em;
          color: #1a1a1a; text-decoration: none;
        }
        .nav-logo span { color: #888; font-weight: 400; }
        .nav-back {
          font-size: 0.72rem; color: #888; text-decoration: none;
          letter-spacing: 0.1em; text-transform: uppercase;
          font-family: 'Inter', sans-serif;
        }
        .nav-back:hover { color: #1a1a1a; }

        .hero {
          background: #1a1a1a;
          padding: 6rem 4rem;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4rem; align-items: center;
        }
        .hero-eyebrow {
          font-size: 0.72rem; letter-spacing: 0.15em;
          text-transform: uppercase; color: #666;
          margin-bottom: 1.25rem;
          display: flex; align-items: center; gap: 0.75rem;
          font-family: 'Inter', sans-serif;
        }
        .hero-eyebrow::before {
          content: ''; display: block;
          width: 28px; height: 1px; background: #555;
        }
        .hero-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: clamp(3rem, 5vw, 5rem);
          line-height: 0.95; text-transform: uppercase;
          letter-spacing: 0.01em; color: #fff;
          margin-bottom: 1.75rem;
        }
        .hero-title em { font-style: normal; color: #666; font-weight: 400; }
        .hero-sub {
          font-size: 1rem; color: #888; line-height: 1.75;
          font-weight: 300; max-width: 420px;
        }
        .hero-right {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1px; background: #333;
        }
        .hero-stat {
          background: #222; padding: 2rem 1.5rem;
        }
        .hero-stat-val {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 2.5rem;
          color: #fff; line-height: 1; margin-bottom: 0.4rem;
        }
        .hero-stat-label {
          font-size: 0.65rem; color: #666;
          text-transform: uppercase; letter-spacing: 0.1em;
          font-family: 'Inter', sans-serif;
        }

        .section { padding: 6rem 4rem; }
        .section-label {
          font-size: 0.72rem; letter-spacing: 0.15em;
          text-transform: uppercase; color: #888;
          margin-bottom: 0.75rem; font-family: 'Inter', sans-serif;
        }
        .section-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: clamp(2rem, 3vw, 2.8rem);
          text-transform: uppercase; letter-spacing: 0.01em;
          color: #0f0f0f; line-height: 1; margin-bottom: 1rem;
        }
        .section-title em { font-style: normal; color: #aaa; font-weight: 400; }

        .benefits-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 1px; background: #e0e0de; margin-top: 3rem;
        }
        .benefit-card {
          background: #f5f5f3; padding: 2.5rem 2rem;
          transition: background 0.2s;
        }
        .benefit-card:hover { background: #efefed; }
        .benefit-num {
          font-size: 0.65rem; font-weight: 500;
          color: #bbb; letter-spacing: 0.08em;
          margin-bottom: 1rem; font-family: 'Inter', sans-serif;
        }
        .benefit-title {
          font-size: 1rem; font-weight: 500;
          color: #1a1a1a; margin-bottom: 0.6rem;
          font-family: 'Inter', sans-serif;
        }
        .benefit-desc {
          font-size: 0.875rem; color: #666;
          line-height: 1.65; font-weight: 300;
          font-family: 'Inter', sans-serif;
        }

        .apply-section {
          background: #1a1a1a;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .apply-left { padding: 6rem 4rem; border-right: 1px solid #333; }
        .apply-right {
          padding: 6rem 4rem;
          display: flex; flex-direction: column; justify-content: center;
        }
        .apply-section .section-label { color: #555; }
        .apply-section .section-title { color: #fff; }
        .apply-section .section-title em { color: #555; }
        .apply-sub {
          font-size: 0.95rem; color: #888; line-height: 1.8;
          font-weight: 300; margin-top: 1.5rem;
          font-family: 'Inter', sans-serif;
        }
        .apply-email {
          display: inline-flex; align-items: center; gap: 0.75rem;
          margin-top: 2.5rem;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 1.4rem;
          text-transform: uppercase; letter-spacing: 0.04em;
          color: #fff; text-decoration: none;
          border-bottom: 1px solid #444; padding-bottom: 0.5rem;
          transition: border-color 0.2s, color 0.2s;
        }
        .apply-email:hover { color: #ccc; border-color: #666; }
        .apply-steps { display: flex; flex-direction: column; gap: 1px; }
        .apply-step {
          background: #222; padding: 1.5rem 2rem;
          display: flex; align-items: flex-start; gap: 1.25rem;
        }
        .step-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 1.5rem;
          color: #444; line-height: 1; flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .step-content {}
        .step-title {
          font-size: 0.85rem; font-weight: 500;
          color: #fff; margin-bottom: 0.3rem;
          font-family: 'Inter', sans-serif;
        }
        .step-desc {
          font-size: 0.78rem; color: #666;
          line-height: 1.6; font-weight: 300;
          font-family: 'Inter', sans-serif;
        }

        footer {
          background: #0f0f0f; padding: 2rem 4rem;
          display: flex; justify-content: space-between; align-items: center;
        }
        .footer-logo {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 1.1rem;
          color: #fff; text-transform: uppercase; letter-spacing: 0.06em;
        }
        .footer-right { display: flex; gap: 2rem; align-items: center; }
        .footer-right a {
          font-size: 0.78rem; color: #666;
          text-decoration: none; letter-spacing: 0.02em;
          font-family: 'Inter', sans-serif;
        }
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

      {/* Nav */}
      <nav className="nav">
        <a href="/" className="nav-logo">GLEE <span>Logistics</span></a>
        <a href="/" className="nav-back">← Back to Home</a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div>
          <div className="hero-eyebrow">Join Our Team</div>
          <h1 className="hero-title">
            Grow with<br /><em>GLEE.</em>
          </h1>
          <p className="hero-sub">
            We are a fast-growing logistics company based in Berlin, built on the belief that great people build great companies. If you are driven, reliable, and ready to make an impact — we want to hear from you.
          </p>
        </div>
        <div className="hero-right">
          <div className="hero-stat">
            <div className="hero-stat-val">80+</div>
            <div className="hero-stat-label">Team Members</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">3</div>
            <div className="hero-stat-label">Years Growing</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">6</div>
            <div className="hero-stat-label">Service Lines</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">DE</div>
            <div className="hero-stat-label">Berlin-Based</div>
          </div>
        </div>
      </section>

      {/* Why GLEE */}
      <section className="section" id="why">
        <div className="section-label">Why GLEE</div>
        <h2 className="section-title">A place where you <em>actually grow</em></h2>
        <div className="benefits-grid">
          {benefits.map((b) => (
            <div className="benefit-card" key={b.num}>
              <div className="benefit-num">{b.num}</div>
              <div className="benefit-title">{b.title}</div>
              <div className="benefit-desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply */}
      <section className="apply-section" id="apply">
        <div className="apply-left">
          <div className="section-label">Open Applications</div>
          <h2 className="section-title">We are always <em>looking for talent</em></h2>
          <p className="apply-sub">
            We don't always advertise every role — but we are always open to meeting driven people. Whether you have a background in logistics, transport, HR, or automotive — send us your CV and tell us how you can add value to GLEE.
          </p>
          <a href="mailto:hr@gleelogistics.de" className="apply-email">
            hr@gleelogistics.de →
          </a>
        </div>
        <div className="apply-right">
          <div className="apply-steps">
            <div className="apply-step">
              <div className="step-num">01</div>
              <div className="step-content">
                <div className="step-title">Send your CV</div>
                <div className="step-desc">Email us your CV and a short introduction about yourself and what role you are interested in.</div>
              </div>
            </div>
            <div className="apply-step">
              <div className="step-num">02</div>
              <div className="step-content">
                <div className="step-title">We review your application</div>
                <div className="step-desc">Our team reviews every application carefully. We aim to respond within 5 business days.</div>
              </div>
            </div>
            <div className="apply-step">
              <div className="step-num">03</div>
              <div className="step-content">
                <div className="step-title">Interview & onboarding</div>
                <div className="step-desc">If there is a match, we invite you for a conversation — and if it goes well, welcome to the team.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo">GLEE Logistics GmbH</div>
        <div className="footer-right">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/careers">Careers</a>
          <span className="footer-copy">© {new Date().getFullYear()} GLEE Logistics GmbH</span>
        </div>
      </footer>
    </main>
  );
}
