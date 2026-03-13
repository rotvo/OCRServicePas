type IconName =
  | 'account'
  | 'apps'
  | 'arrow-up-circle'
  | 'audit'
  | 'bell'
  | 'billing'
  | 'check'
  | 'check-circle'
  | 'chevron-down'
  | 'code'
  | 'domains'
  | 'earnings'
  | 'feature-flags'
  | 'gift'
  | 'globe'
  | 'key'
  | 'lock'
  | 'notifications'
  | 'plans'
  | 'settings'
  | 'support'
  | 'templates'
  | 'tokens'
  | 'usage'
  | 'users'
  | 'ssh'

type NavItem = {
  icon: IconName
  label: string
  active?: boolean
}

type NavSection = {
  title: string
  items: NavItem[]
}

type UpgradeCard = {
  accent: 'pro' | 'enterprise'
  cta: string
  description: string
  features: string[]
  note?: string
  paymentLink?: string
  planCode: 'annual-pro' | 'monthly-enterprise'
  price: string
  title: string
}

const stripePaymentConfig = {
  annualProPath:
    import.meta.env.VITE_STRIPE_PAYMENT_LINK_ANNUAL_PRO?.trim() ?? '',
  baseUrl: import.meta.env.VITE_STRIPE_PAYMENT_LINK_BASE?.trim() ?? '',
  monthlyEnterprisePath:
    import.meta.env.VITE_STRIPE_PAYMENT_LINK_MONTHLY_ENTERPRISE?.trim() ?? '',
}

function isLocalhostHost(hostname: string) {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1'
}

function buildStripePaymentLink(path: string) {
  if (!stripePaymentConfig.baseUrl || !path) {
    return ''
  }

  const usesTestPrefix =
    typeof window !== 'undefined' && isLocalhostHost(window.location.hostname)

  const baseUrl = stripePaymentConfig.baseUrl.endsWith('/')
    ? stripePaymentConfig.baseUrl
    : `${stripePaymentConfig.baseUrl}/`
  const testPrefix = usesTestPrefix ? 'test_' : ''

  return `${baseUrl}${testPrefix}${path}`
}

function getStripePaymentLink(planCode: UpgradeCard['planCode']) {
  if (typeof window === 'undefined') {
    if (planCode === 'annual-pro') {
      return buildStripePaymentLink(stripePaymentConfig.annualProPath)
    }

    return buildStripePaymentLink(stripePaymentConfig.monthlyEnterprisePath)
  }

  if (planCode === 'annual-pro') {
    return buildStripePaymentLink(stripePaymentConfig.annualProPath)
  }

  return buildStripePaymentLink(stripePaymentConfig.monthlyEnterprisePath)
}

const workspaceSections: NavSection[] = [
  {
    title: 'Workspace',
    items: [
      { icon: 'settings', label: 'General' },
      { icon: 'users', label: 'People' },
      { icon: 'plans', label: 'Upgrade OCR', active: true },
      { icon: 'usage', label: 'Usage' },
      { icon: 'billing', label: 'Billing' },
      { icon: 'globe', label: 'Domains' },
      { icon: 'audit', label: 'Audit Logs' },
      { icon: 'code', label: 'Developer' },
      { icon: 'earnings', label: 'Earnings' },
      { icon: 'templates', label: 'Templates' },
      { icon: 'gift', label: 'Referrals' },
    ],
  },
  {
    title: 'Personal',
    items: [
      { icon: 'account', label: 'Account' },
      { icon: 'notifications', label: 'Notifications' },
      { icon: 'feature-flags', label: 'Feature Flags' },
      { icon: 'tokens', label: 'Tokens' },
      { icon: 'ssh', label: 'SSH Keys' },
      { icon: 'apps', label: 'Apps' },
      { icon: 'lock', label: 'Security' },
    ],
  },
]

const developerFeatures = [
  'Developer sandbox access only',
  'OCR credits remaining: 0 for the current cycle',
  'Single developer workspace',
  'REST API integration in evaluation mode',
  '1 evaluation OCR stream while quota is available',
  'Key-value, form and barcode extraction are rate-limited',
  'No sustained or batch OCR processing',
  'Upgrade required to resume image decoding',
]

const upgradeCards: UpgradeCard[] = [
  {
    accent: 'pro',
    planCode: 'annual-pro',
    cta: 'Upgrade to Pro',
    description:
      'For long-term projects requiring consistent, high-volume image analysis solution.',
    features: [
      'Includes an OCR license valid for one year and high-volume usage',
      'Generous fair-use usage limits apply, resets each month',
      'OCR Engine Access (Annual License)',
      'Web and Mobile App SDK Integration (REST API)',
      'Unlimited workspace seats included',
      'Key-Value OCR and Form Extraction Barcode & QR Code Decoding',
      '10 Concurrent streams',
      'Concurrent global regions',
    ],
    note: 'One-Time Annual Payment',
    price: '$400',
    title: 'Annual Pro',
  },
  {
    accent: 'enterprise',
    planCode: 'monthly-enterprise',
    cta: 'Subscribe to Monthly',
    description:
      'For scale-intensive, enterprise-grade real-time decoding and compliance.',
    features: [
      'Breakdown: $100 initial license fee + $100/mo usage limit',
      'Monthly recurring usage is capped, credits renew each cycle',
      'Enterprise OCR License (Recurring)',
      'Web and Mobile App SDK Integration (REST API)',
      'Unlimited workspace seats included',
      'Key-Value OCR and Form Extraction Barcode & QR Code Decoding',
      '5 Concurrent streams',
      'Concurrent global regions',
    ],
    note: '/mo ($100 Initial License Fee)',
    price: '$100',
    title: 'Monthly Enterprise',
  },
]

function Icon({ name }: { name: IconName }) {
  switch (name) {
    case 'account':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    case 'apps':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      )
    case 'arrow-up-circle':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="m16 12-4-4-4 4" />
          <path d="M12 16V8" />
        </svg>
      )
    case 'audit':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      )
    case 'bell':
    case 'notifications':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      )
    case 'billing':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="1" y="4" width="22" height="16" rx="2" />
          <path d="M1 10h22" />
        </svg>
      )
    case 'check':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m20 6-11 11-5-5" />
        </svg>
      )
    case 'check-circle':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </svg>
      )
    case 'chevron-down':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      )
    case 'code':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      )
    case 'domains':
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10" />
        </svg>
      )
    case 'earnings':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 1v22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    case 'feature-flags':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <path d="M4 22v-7" />
        </svg>
      )
    case 'gift':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 12v10H4V12" />
          <path d="M2 7h20v5H2z" />
          <path d="M12 22V7" />
          <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7Z" />
          <path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7Z" />
        </svg>
      )
    case 'key':
    case 'tokens':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m21 2-2 2" />
          <path d="m15.5 7.5 3 3L22 7l-3-3-3.5 3.5" />
          <path d="M11.39 11.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78Z" />
        </svg>
      )
    case 'lock':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    case 'plans':
      return (
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <path d="M3 2.375h-.25c-.69 0-1.25.56-1.25 1.25V15c0 .69.56 1.25 1.25 1.25H3" />
          <path d="M15 2.375h.25c.69 0 1.25.56 1.25 1.25V15c0 .69-.56 1.25-1.25 1.25H15" />
          <path d="M6.5 1.5h5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25V2.75c0-.69.56-1.25 1.25-1.25Z" />
        </svg>
      )
    case 'settings':
      return (
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M13.906 4.91a6.4 6.4 0 0 0-1.451-.84l-.469-1.873a1.25 1.25 0 0 0-1.212-.947H9.226a1.25 1.25 0 0 0-1.213.947L7.545 4.07a6.4 6.4 0 0 0-1.452.84l-1.857-.532a1.25 1.25 0 0 0-1.427.577l-.774 1.34A1.25 1.25 0 0 0 2.25 7.82l1.388 1.343a6.5 6.5 0 0 0 0 1.676L2.25 12.181a1.25 1.25 0 0 0-.214 1.524l.774 1.34a1.25 1.25 0 0 0 1.427.577l1.857-.531c.442.34.93.623 1.452.84l.468 1.872c.14.557.64.947 1.213.947h1.548a1.25 1.25 0 0 0 1.213-.947l.468-1.873c.522-.216 1.01-.5 1.452-.84l1.857.532a1.25 1.25 0 0 0 1.427-.577l.774-1.34a1.25 1.25 0 0 0-.214-1.524l-1.389-1.343a6.5 6.5 0 0 0 0-1.676l1.389-1.343a1.25 1.25 0 0 0 .213-1.524l-.773-1.34a1.25 1.25 0 0 0-1.427-.577l-1.857.531Z" />
          <path d="M10 12.332a2.333 2.333 0 1 0 0-4.666 2.333 2.333 0 0 0 0 4.666Z" />
        </svg>
      )
    case 'ssh':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m4 17 6-6-6-6" />
          <path d="M12 19h8" />
        </svg>
      )
    case 'support':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 2-3 4" />
          <path d="M12 17h.01" />
        </svg>
      )
    case 'templates':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    case 'usage':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
        </svg>
      )
    case 'users':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    default:
      return null
  }
}

function RailwayLogo() {
  return (
    <svg viewBox="0 0 1024 1024" aria-hidden="true" className="railway-logo">
      <path d="M4.756 438.175A521 521 0 0 0 0 489.735h777.799c-2.716-5.306-6.365-10.09-10.045-14.772-132.97-171.791-204.498-156.896-306.819-161.26-34.114-1.403-57.249-1.967-193.037-1.967-72.677 0-151.688.185-228.628.39-9.96 26.884-19.566 52.942-24.243 74.14h398.571v51.909Z" />
      <path d="M783.93 541.696H.399c.82 13.851 2.112 27.517 3.978 40.999h723.39c32.248 0 50.299-18.297 56.162-40.999ZM45.017 724.306S164.941 1018.77 511.46 1024c207.112 0 385.071-123.006 465.907-299.694Z" />
      <path d="M511.454 0C319.953 0 153.311 105.16 65.31 260.612c68.771-.144 202.704-.226 202.704-.226h.031v-.051c158.309 0 164.193.707 195.118 1.998l19.149.706c66.7 2.224 148.683 9.384 213.19 58.19 35.015 26.471 85.571 84.896 115.708 126.52 27.861 38.499 35.876 82.756 16.933 125.158-17.436 38.97-54.952 62.215-100.383 62.215H16.69s4.233 17.944 10.58 37.751h970.632A510.4 510.4 0 0 0 1024 512.218C1024.01 229.355 794.532 0 511.454 0Z" />
    </svg>
  )
}

function AvatarBadge({ initials, large = false }: { initials: string; large?: boolean }) {
  return (
    <span className={`avatar-badge${large ? ' avatar-badge--large' : ''}`}>
      {initials}
    </span>
  )
}

function NavigationGroup({ section }: { section: NavSection }) {
  return (
    <section className="sidebar-group">
      <p className="sidebar-title">{section.title}</p>
      <div className="sidebar-list">
        {section.items.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`sidebar-item${item.active ? ' is-active' : ''}`}
          >
            <span className="sidebar-item-icon">
              <Icon name={item.icon} />
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function PlanFeature({ text }: { text: string }) {
  return (
    <li className="active-plan-feature">
      <span className="feature-icon feature-icon--active">
        <Icon name="check-circle" />
      </span>
      <span>{text}</span>
    </li>
  )
}

function UpgradeOption({ card }: { card: UpgradeCard }) {
  const handleCheckout = () => {
    if (!card.paymentLink) {
      return
    }

    window.location.assign(card.paymentLink)
  }

  return (
    <article className={`pricing-card pricing-card--${card.accent}`}>
      <header className="pricing-card-header">
        <div className="pricing-card-title-block">
          <h3 className="pricing-card-title">{card.title}</h3>
          <p className="pricing-card-price-line">
            <span className="pricing-card-price">{card.price}</span>
            {card.note ? (
              <span className="pricing-card-note">{card.note}</span>
            ) : null}
          </p>
        </div>
        <p className="pricing-card-description">{card.description}</p>
      </header>

      <ul className="pricing-card-features">
        {card.features.map((feature) => (
          <li key={feature} className="pricing-card-feature">
            <span className="feature-icon">
              <Icon name="check" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        data-payment-link={card.paymentLink ?? ''}
        data-plan-code={card.planCode}
        className={`pricing-card-button pricing-card-button--${card.accent}`}
        disabled={!card.paymentLink}
        onClick={handleCheckout}
      >
        {card.cta}
      </button>
    </article>
  )
}

export default function PlansOCRPage() {
  const cards = upgradeCards.map((card) =>
    ({
      ...card,
      paymentLink: getStripePaymentLink(card.planCode),
    })
  )

  const scrollToUpgradeOptions = () => {
    document
      .getElementById('upgrade-options')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="plans-page">
      <header className="plans-topbar">
        <div className="plans-topbar-inner">
          <a href="#" className="brand-mark" aria-label="Vision OCR home">
            <RailwayLogo />
          </a>

          <div className="plans-topbar-actions">
            <button type="button" className="topbar-link">
              Help
            </button>

            <button type="button" className="topbar-icon-button">
              <span className="topbar-icon">
                <Icon name="bell" />
              </span>
              <span className="topbar-badge">1</span>
            </button>

            <button type="button" className="topbar-avatar-button">
              <AvatarBadge initials="R" />
            </button>
          </div>
        </div>
      </header>

      <div className="plans-shell">
        <aside className="plans-sidebar">
          <button type="button" className="workspace-switcher">
            <span className="workspace-switcher-main">
              <AvatarBadge initials="R" />
              <span className="workspace-switcher-copy">
                <span className="workspace-name">registros&apos;s Projects</span>
                <span className="workspace-tier">Developer Workspace</span>
              </span>
            </span>
            <span className="workspace-switcher-icon">
              <Icon name="chevron-down" />
            </span>
          </button>

          {workspaceSections.map((section) => (
            <NavigationGroup key={section.title} section={section} />
          ))}
        </aside>

        <main className="plans-content">
          <section className="plans-panel">
            <div className="plans-panel-header">
              <h1 className="plans-page-title">Upgrade OCR</h1>
            </div>

            <div className="plans-divider" />

            <div className="plans-stack">
              <div className="plans-row">
                <h2 className="plans-section-title">Active Plan</h2>
                <button
                  type="button"
                  className="plans-cta-link"
                  onClick={scrollToUpgradeOptions}
                >
                  <span className="plans-cta-icon">
                    <Icon name="arrow-up-circle" />
                  </span>
                  <span>View Upgrade Options</span>
                </button>
              </div>

              <section className="active-plan-card">
                <div className="active-plan-header">
                  <div className="active-plan-avatar-shell">
                    <AvatarBadge initials="r" large />
                  </div>

                  <div className="active-plan-copy">
                    <p className="active-plan-title">
                      You&apos;re on the Developer Plan
                    </p>
                    <p className="active-plan-description">
                      Your Developer plan only includes a very small OCR trial
                      allocation, and that usage has already been consumed. OCR
                      processing is now paused until you upgrade to Annual Pro
                      or Monthly Enterprise.
                    </p>
                  </div>
                </div>

                <ul className="active-plan-features">
                  {developerFeatures.map((feature) => (
                    <PlanFeature key={feature} text={feature} />
                  ))}
                </ul>
              </section>

              <section className="upgrade-panel" id="upgrade-options">
                <div className="upgrade-panel-copy">
                  <h2 className="upgrade-panel-title">
                    Ready for powerful real-time OCR? Level up your projects
                    with specialized image decoding.
                  </h2>
                  <p className="upgrade-panel-description">
                    Choose your annual license or Monthly Enterprise to start
                    processing images instantly.
                  </p>
                </div>

                <div className="pricing-grid">
                  {cards.map((card) => (
                    <UpgradeOption key={card.title} card={card} />
                  ))}
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
