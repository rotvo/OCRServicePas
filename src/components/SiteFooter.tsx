import { HOME_PATH, OCR_UPGRADE_PATH } from '../routes'

type FooterGroup = {
  links: string[]
  title: string
}

const footerGroups: FooterGroup[] = [
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
    About: HOME_PATH,
    'About railwayocr': HOME_PATH,
    API: `${HOME_PATH}#integrations`,
    Contact: `${HOME_PATH}#footer`,
    Docs: `${HOME_PATH}#integrations`,
    Enterprise: OCR_UPGRADE_PATH,
    'Fair Use': `${HOME_PATH}#footer`,
    Features: `${HOME_PATH}#features`,
    GitHub: `${HOME_PATH}#footer`,
    Integrations: `${HOME_PATH}#integrations`,
    Pricing: OCR_UPGRADE_PATH,
    Security: `${HOME_PATH}#integrations`,
    Support: `${HOME_PATH}#footer`,
    'Use cases': `${HOME_PATH}#integrations`,
    Workflow: `${HOME_PATH}#workflow`,
  }

  return anchors[label] ?? `${HOME_PATH}#footer`
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

export default function SiteFooter() {
  return (
    <footer id="footer" className="landing-footer">
      <div className="landing-footer-brand">
        <a
          href={HOME_PATH}
          className="brand-mark landing-brand-mark landing-footer-logo"
          aria-label="railwayocr home"
        >
          <RailwayLogo />
        </a>
        <a href={`${HOME_PATH}#top`} className="landing-footer-status">
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
  )
}
