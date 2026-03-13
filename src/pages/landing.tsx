const landingFeatures = [
  {
    description:
      'Convert scanned files and business documents into searchable, usable text.',
    title: 'OCR document processing',
  },
  {
    description:
      'Extract text and structured values from photos, forms, and operational images.',
    title: 'Data extraction from images',
  },
  {
    description:
      'Connect OCR results directly into your apps, dashboards, or internal workflows.',
    title: 'API integration',
  },
]

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="plans-topbar">
        <div className="plans-topbar-inner">
          <a href="#" className="brand-mark landing-brand-mark" aria-label="Vision OCR Services">
            <span className="landing-brand-letter">V</span>
          </a>

          <div className="plans-topbar-actions">
            <span className="landing-status">Vision OCR Services</span>
            <a href="#upgrade-ocr" className="landing-topbar-button">
              Upgrade OCR
            </a>
          </div>
        </div>
      </header>

      <main className="landing-shell">
        <section className="landing-hero">
          <p className="landing-eyebrow">Vision OCR Services</p>
          <h1 className="landing-title">
            OCR document and image text extraction for business workflows.
          </h1>
          <p className="landing-description">
            Vision OCR provides document and image text extraction for business
            workflows. Use the platform to process documents, extract data from
            images, and connect OCR results into your applications through an
            integration-ready API.
          </p>

          <div className="landing-actions">
            <a href="#upgrade-ocr" className="landing-primary-action">
              View OCR Plans
            </a>
            <p className="landing-secondary-copy">
              Platform built for teams that need reliable text extraction from
              documents and images.
            </p>
          </div>
        </section>

        <section className="landing-feature-section">
          <div className="landing-section-copy">
            <p className="landing-section-label">Features</p>
            <h2 className="landing-section-title">
              A focused OCR platform for operational workflows.
            </h2>
          </div>

          <div className="landing-feature-grid">
            {landingFeatures.map((feature) => (
              <article key={feature.title} className="landing-feature-card">
                <span className="landing-feature-icon" aria-hidden="true" />
                <h3 className="landing-feature-title">{feature.title}</h3>
                <p className="landing-feature-description">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
