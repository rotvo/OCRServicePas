const landingFeatures = [
  {
    description:
      'Process PDFs, contracts, tickets, and scanned files into searchable, usable text.',
    title: 'Document OCR',
  },
  {
    description:
      'Extract fields, numbers, names, and operational data from photos, forms, and images.',
    title: 'Structured extraction',
  },
  {
    description:
      'Connect OCR results through API to power dashboards, CRMs, ERPs, and internal workflows.',
    title: 'API integration',
  },
]

const landingStats = [
  { label: 'Documents ready for search', value: '99.2%' },
  { label: 'Time to launch', value: '< 1 day' },
  { label: 'Teams automating intake', value: '24/7' },
]

const workflowSteps = [
  {
    description:
      'Upload files, photos, or full batches directly from your daily operation.',
    step: '01',
    title: 'Upload documents',
  },
  {
    description:
      'railwayocr detects text, organizes fields, and prepares output for your system.',
    step: '02',
    title: 'Process with OCR',
  },
  {
    description:
      'Send results into your tools with a simple and reliable integration.',
    step: '03',
    title: 'Activate workflows',
  },
]

const useCases = [
  'Capture shipping slips, manifests, and logistics documents',
  'Digitize operational and administrative forms',
  'Extract data from tickets, receipts, and photo evidence',
  'Integrate OCR into back-office, support, and automation flows',
]

const footerGroups = [
  {
    links: ['Features', 'Workflow', 'Integrations', 'Pricing'],
    title: 'Product',
  },
  {
    links: ['About railwayocr', 'Use cases', 'Security', 'API'],
    title: 'Company',
  },
  {
    links: ['Support', 'Contact', 'Docs', 'GitHub'],
    title: 'Contact',
  },
  {
    links: ['Privacy Policy', 'Terms of Service', 'Fair Use', 'Enterprise'],
    title: 'Legal',
  },
]

function anchorFromLabel(label: string) {
  const anchors: Record<string, string> = {
    About: '#top',
    'About railwayocr': '#top',
    API: '#integrations',
    Contact: '#footer',
    Docs: '#integrations',
    Enterprise: '#upgrade-ocr',
    'Fair Use': '#footer',
    Features: '#features',
    GitHub: '#footer',
    Integrations: '#integrations',
    Pricing: '#upgrade-ocr',
    Security: '#integrations',
    Support: '#footer',
    Workflow: '#workflow',
  }

  return anchors[label] ?? '#footer'
}

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="plans-topbar">
        <div className="plans-topbar-inner landing-topbar-inner">
          <a
            href="#top"
            className="brand-mark landing-brand-mark"
            aria-label="railwayocr"
          >
            <span className="landing-brand-letter">R</span>
          </a>

          <nav className="landing-nav" aria-label="Primary">
            <a href="#features" className="topbar-link">
              Features
            </a>
            <a href="#workflow" className="topbar-link">
              Workflow
            </a>
            <a href="#integrations" className="topbar-link">
              Integrations
            </a>
            <a href="#footer" className="topbar-link">
              Contact
            </a>
          </nav>

          <div className="plans-topbar-actions">
            <span className="landing-status">railwayocr</span>
            <a href="#upgrade-ocr" className="landing-topbar-button">
              View plans
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="landing-shell">
        <section className="landing-hero">
          <div className="landing-hero-copy">
            <p className="landing-eyebrow">railwayocr</p>
            <h1 className="landing-title">
              OCR built to run documents and image extraction inside your business.
            </h1>
            <p className="landing-description">
              railwayocr turns scanned documents, forms, tickets, and
              operational images into reliable text and actionable data. Upload,
              process, and connect results to your applications from a single
              platform.
            </p>

            <div className="landing-actions">
              <a href="#upgrade-ocr" className="landing-primary-action">
                View OCR plans
              </a>
              <a href="#features" className="landing-secondary-action">
                Explore features
              </a>
            </div>

            <p className="landing-secondary-copy">
              Designed for teams that need continuous data capture, fast
              integration, and a simple experience for documents and images.
            </p>
          </div>

          <aside className="landing-hero-panel" aria-label="railwayocr summary">
            <div className="landing-panel-badge">OCR platform</div>
            <h2 className="landing-panel-title">
              An extraction layer for your daily workflows.
            </h2>
            <div className="landing-stat-grid">
              {landingStats.map((stat) => (
                <article key={stat.label} className="landing-stat-card">
                  <strong className="landing-stat-value">{stat.value}</strong>
                  <span className="landing-stat-label">{stat.label}</span>
                </article>
              ))}
            </div>
            <div className="landing-panel-note">
              <span className="landing-panel-dot" aria-hidden="true" />
              All systems operational
            </div>
          </aside>
        </section>

        <section id="features" className="landing-feature-section">
          <div className="landing-section-copy">
            <p className="landing-section-label">Features</p>
            <h2 className="landing-section-title">
              A complete landing page that shows exactly what railwayocr does.
            </h2>
            <p className="landing-section-body">
              Centralize processing, extraction, and delivery in an interface
              built for real operational work.
            </p>
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

        <section id="workflow" className="landing-workflow-section">
          <div className="landing-section-copy">
            <p className="landing-section-label">Workflow</p>
            <h2 className="landing-section-title">
              From raw file to structured data your system can already use.
            </h2>
          </div>

          <div className="landing-workflow-grid">
            {workflowSteps.map((item) => (
              <article key={item.step} className="landing-workflow-card">
                <span className="landing-workflow-step">{item.step}</span>
                <h3 className="landing-feature-title">{item.title}</h3>
                <p className="landing-feature-description">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="integrations" className="landing-split-section">
          <article className="landing-content-panel">
            <p className="landing-section-label">Use Cases</p>
            <h2 className="landing-section-title">
              Built for operations that cannot rely on manual work.
            </h2>
            <div className="landing-usecase-list">
              {useCases.map((item) => (
                <div key={item} className="landing-usecase-item">
                  <span className="landing-usecase-marker" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="landing-content-panel landing-content-panel-accent">
            <p className="landing-section-label">Integrations</p>
            <h2 className="landing-section-title">
              An API ready to connect railwayocr to your stack.
            </h2>
            <p className="landing-section-body">
              Integrate OCR results with your internal processes, data delivery,
              validations, and automations without building an extra layer from
              scratch.
            </p>
            <div className="landing-integration-code">
              <span>POST</span>
              <span>/api/v1/ocr/process</span>
              <span>JSON response</span>
            </div>
          </article>
        </section>

        <section className="landing-cta-section">
          <div>
            <p className="landing-section-label">Start now</p>
            <h2 className="landing-section-title">
              Bring railwayocr into your workflow and centralize document data
              capture.
            </h2>
          </div>

          <div className="landing-cta-actions">
            <a href="#upgrade-ocr" className="landing-primary-action">
              Go to plans
            </a>
            <a href="#footer" className="landing-secondary-action">
              View contact
            </a>
          </div>
        </section>
      </main>

      <footer id="footer" className="landing-footer">
        <div className="landing-footer-brand">
          <a
            href="#top"
            className="brand-mark landing-brand-mark landing-footer-logo"
            aria-label="railwayocr home"
          >
            <span className="landing-brand-letter">R</span>
          </a>
          <a href="#top" className="landing-footer-status">
            All systems operational
          </a>
          <div className="landing-footer-divider" />
          <p className="landing-footer-copy">
            Copyright (c) 2026 railwayocr.
            <br />
            All rights reserved.
          </p>
        </div>

        <div className="landing-footer-grid">
          {footerGroups.map((group) => (
            <section key={group.title} className="landing-footer-column">
              <p className="landing-footer-heading">{group.title}</p>
              {group.links.map((link) => (
                <a
                  key={link}
                  href={anchorFromLabel(link)}
                  className="landing-footer-link"
                >
                  {link}
                </a>
              ))}
            </section>
          ))}
        </div>
      </footer>
    </div>
  )
}
