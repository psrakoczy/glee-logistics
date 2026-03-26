export default function Impressum() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#f5f5f3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "6rem 2rem 4rem" }}>
        <a href="/" style={{ fontSize: "0.75rem", color: "#888", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>← Zurück</a>

        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em", fontSize: "3.5rem", color: "#0f0f0f", marginTop: "2rem", marginBottom: "3rem" }}>Impressum</h1>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1rem" }}>Angaben gemäß § 5 DDG</h2>
          <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.8", fontWeight: 300 }}>
            <strong style={{ fontWeight: 500 }}>GLEE Logistics GmbH</strong><br />
            Schloßstraße 110<br />
            12163 Berlin<br />
            Deutschland
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1rem" }}>Kontakt</h2>
          <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.8", fontWeight: 300 }}>
            E-Mail: <a href="mailto:info@gleelogistics.de" style={{ color: "#1a1a1a" }}>info@gleelogistics.de</a><br />
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1rem" }}>Handelsregister</h2>
          <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.8", fontWeight: 300 }}>
            Registergericht: Amtsgericht Charlottenburg<br />
            Registernummer: HRB 278530 B
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1rem" }}>Umsatzsteuer-ID</h2>
          <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.8", fontWeight: 300 }}>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
            DE355079836
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1rem" }}>Vertretungsberechtigte Geschäftsführung</h2>
          <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.8", fontWeight: 300 }}>
            Patrycja Rakoczy
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "1rem" }}>EU-Streitschlichtung</h2>
          <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.8", fontWeight: 300 }}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: "#1a1a1a" }}>
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <div style={{ borderTop: "1px solid #e0e0de", paddingTop: "2rem", marginTop: "3rem" }}>
          <p style={{ fontSize: "0.78rem", color: "#aaa", lineHeight: "1.7" }}>
            Für rechtssichere Beratung empfehlen wir, einen auf Internetrecht spezialisierten Rechtsanwalt hinzuzuziehen.
          </p>
        </div>
      </div>
    </main>
  );
}
