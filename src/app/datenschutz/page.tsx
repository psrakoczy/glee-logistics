export default function Datenschutz() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#f5f5f3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        h2 { font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: #888; margin-bottom: 1rem; margin-top: 2.5rem; }
        p, li { font-size: 0.95rem; color: #333; line-height: 1.8; font-weight: 300; }
        ul { padding-left: 1.25rem; }
        li { margin-bottom: 0.4rem; }
      `}</style>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "6rem 2rem 4rem" }}>
        <a href="/" style={{ fontSize: "0.75rem", color: "#888", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>← Zurück</a>

        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em", fontSize: "3.5rem", color: "#0f0f0f", marginTop: "2rem", marginBottom: "3rem" }}>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
          <strong style={{ fontWeight: 500 }}>GLEE Logistics GmbH</strong><br />
          Schloßstraße 110<br />
            12163 Berlin<br />
            Deutschland<br />
          E-Mail: <a href="mailto:info@gleelogistics.de" style={{ color: "#1a1a1a" }}>info@gleelogistics.de</a>
        </p>

        <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p>
          Wir erheben personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Dienstleistungen erforderlich ist. Bei der Nutzung unseres Kontaktformulars verarbeiten wir folgende Daten:
        </p>
        <ul style={{ marginTop: "0.75rem" }}>
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Unternehmen (freiwillig)</li>
          <li>Nachrichteninhalt</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
        </p>

        <h2>3. Speicherdauer</h2>
        <p>
          Ihre Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
        </p>

        <h2>4. Weitergabe von Daten</h2>
        <p>
          Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nicht, es sei denn, dies ist zur Vertragserfüllung erforderlich oder Sie haben ausdrücklich eingewilligt.
        </p>

        <h2>5. Ihre Rechte</h2>
        <p>Sie haben das Recht auf:</p>
        <ul style={{ marginTop: "0.75rem" }}>
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@gleelogistics.de" style={{ color: "#1a1a1a" }}>info@gleelogistics.de</a>
        </p>

        <h2>6. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Behörde richtet sich nach Ihrem Wohnort oder dem Sitz unseres Unternehmens.
        </p>

        <h2>7. Hosting</h2>
        <p>
          Diese Website wird bei einem externen Hosting-Anbieter betrieben. Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Die Nutzung des Hosters erfolgt zum Zweck der Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) und im Rahmen eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <div style={{ borderTop: "1px solid #e0e0de", paddingTop: "2rem", marginTop: "3rem" }}>
          <p style={{ fontSize: "0.78rem", color: "#aaa", lineHeight: "1.7" }}>
            Für rechtssichere Beratung empfehlen wir, diese Datenschutzerklärung von einem auf Datenschutzrecht spezialisierten Rechtsanwalt prüfen zu lassen.
          </p>
        </div>
      </div>
    </main>
  );
}
