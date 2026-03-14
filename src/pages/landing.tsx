import SiteFooter from '../components/SiteFooter'
import { HOME_PATH, OCR_UPGRADE_PATH } from '../routes'

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

function RailwayLogo() {
  return (
    <svg viewBox="0 0 1024 1024" aria-hidden="true" className="railway-logo">
      <path d="M4.756 438.175A521 521 0 0 0 0 489.735h777.799c-2.716-5.306-6.365-10.09-10.045-14.772-132.97-171.791-204.498-156.896-306.819-161.26-34.114-1.403-57.249-1.967-193.037-1.967-72.677 0-151.688.185-228.628.39-9.96 26.884-19.566 52.942-24.243 74.14h398.571v51.909Z" />
      <path d="M783.93 541.696H.399c.82 13.851 2.112 27.517 3.978 40.999h723.39c32.248 0 50.299-18.297 56.162-40.999ZM45.017 724.306S164.941 1018.77 511.46 1024c207.112 0 385.071-123.006 465.907-299.694Z" />
      <path d="M511.454 0C319.953 0 153.311 105.16 65.31 260.612c68.771-.144 202.704-.226 202.704-.226h.031v-.051c158.309 0 164.193.707 195.118 1.998l19.149.706c66.7 2.224 148.683 9.384 213.19 58.19 35.015 26.471 85.571 84.896 115.708 126.52 27.861 38.499 35.876 82.756 16.933 125.158-17.436 38.97-54.952 62.215-100.383 62.215H16.69s4.233 17.944 10.58 37.751h970.632A510.4 510.4 0 0 0 1024 512.218C1024.01 229.355 794.532 0 511.454 0Z" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

function AvatarBadge() {
  return <span className="avatar-badge">R</span>
}

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="plans-topbar">
        <div className="plans-topbar-inner landing-topbar-inner">
          <a
            href={HOME_PATH}
            className="brand-mark landing-brand-mark"
            aria-label="railwayocr"
          >
            <RailwayLogo />
          </a>

          <div className="plans-topbar-actions">
            <button type="button" className="topbar-link">
              Help
            </button>

            <button type="button" className="topbar-icon-button">
              <span className="topbar-icon">
                <BellIcon />
              </span>
              <span className="topbar-badge">1</span>
            </button>

            <button type="button" className="topbar-avatar-button">
              <AvatarBadge />
            </button>
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
              <a href={OCR_UPGRADE_PATH} className="landing-primary-action">
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
            <a href={OCR_UPGRADE_PATH} className="landing-primary-action">
              Go to plans
            </a>
            <a href="#footer" className="landing-secondary-action">
              View contact
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
