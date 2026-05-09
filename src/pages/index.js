import React, { useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

/* ── Data ─────────────────────────────────────────────────── */
const PRODUCT_CATEGORIES = [
  {
    icon: '🖥️',
    title: 'X Series IP Phones',
    desc: 'Enterprise & call center phones with up to 20 SIP lines, touch screen, HD audio, and Gigabit Ethernet.',
    link: '/docs/ip-phones/x-series/overview',
    badge: 'Popular',
    badgeType: 'hot',
  },
  {
    icon: '💼',
    title: 'V Series Business Phones',
    desc: 'Prime business IP phones featuring HD video calling, color displays, and elegant industrial design.',
    link: '/docs/ip-phones/v-series/overview',
    badge: 'New',
    badgeType: 'new',
  },
  {
    icon: '🏨',
    title: 'H Series Hotel Phones',
    desc: 'Hospitality-grade IP phones with Wi-Fi, HD audio, and seamless PMS integration for hotels.',
    link: '/docs/ip-phones/h-series/overview',
  },
  {
    icon: '⚡',
    title: 'XU Series High-End Phones',
    desc: 'Three-screen high-end IP phones with built-in Bluetooth, DSS keys, and wideband audio.',
    link: '/docs/ip-phones/xu-series/overview',
  },
  {
    icon: '📱',
    title: 'A Series Android Phones',
    desc: 'Android-based touch screen IP phones with app ecosystem and full enterprise UC capabilities.',
    link: '/docs/ip-phones/a-series/overview',
  },
  {
    icon: '🚪',
    title: 'Door Phones & Intercoms',
    desc: 'SIP video door phones, indoor stations, and audio/video intercom systems for secure entry.',
    link: '/docs/security-products/door-phones',
  },
  {
    icon: '📡',
    title: 'SIP Speakers & Paging',
    desc: 'Network paging speakers, nurse call consoles, and audio broadcast systems for public spaces.',
    link: '/docs/security-products/sip-speakers',
  },
  {
    icon: '🔌',
    title: '2-Wire Products',
    desc: 'Cost-efficient 2-wire IP phones, converters, and PoE switches for legacy infrastructure.',
    link: '/docs/getting-started/quick-start',
  },
];

const SOLUTIONS = [
  {
    icon: '🏢',
    title: 'Enterprise Solution',
    desc: 'Unified communication systems for modern enterprise environments with PBX integration.',
    link: 'https://fanvil.com/solution/ApartmentSolution.html',
  },
  {
    icon: '🏥',
    title: 'Medical / Healthcare',
    desc: 'Nurse call systems and medical-grade communication for hospitals and care facilities.',
    link: 'https://fanvil.com/solution/MedicalSolution.html',
  },
  {
    icon: '🎓',
    title: 'Education Solution',
    desc: 'Smart campus communication for schools and universities to accelerate digital transformation.',
    link: 'https://fanvil.com/solution/Educational.html',
  },
  {
    icon: '🛏️',
    title: 'Hotel & Hospitality',
    desc: 'Smart hospitality communication with PMS integration and guest experience features.',
    link: 'https://fanvil.com/solution/Hotel.html',
  },
  {
    icon: '🏭',
    title: 'Industrial Solution',
    desc: 'Rugged VoIP for industrial environments including warehousing, logistics, and retail.',
    link: 'https://fanvil.com/solution/IndustrialSolution.html',
  },
  {
    icon: '☁️',
    title: 'Cloud Communication',
    desc: 'SIP-based cloud telephony solutions compatible with major hosted UCaaS providers.',
    link: 'https://fanvil.com/solution/CloudSolution.html',
  },
];

const QUICK_LINKS = [
  { label: '📥 Firmware Downloads', href: 'https://fanvil.com/service/doc/index.html' },
  { label: '🔧 Quick Start Guide', href: '/docs/getting-started/quick-start' },
  { label: '⚙️ Auto Provisioning', href: '/docs/getting-started/auto-provisioning' },
  { label: '📋 3CX Integration', href: '/docs/integrations/3cx' },
  { label: '🔍 FAQ', href: '/docs/faq/general' },
  { label: '📞 Contact Support', href: 'https://fanvil.com/contactus/index.html' },
];

const INTEGRATIONS = [
  { label: '3CX', color: '#003153' },
  { label: 'Microsoft Teams', color: '#5059C9' },
  { label: 'Zoom', color: '#2D8CFF' },
  { label: 'PortSIP', color: '#00875A' },
  { label: 'BroadSoft', color: '#E62B1E' },
  { label: 'Asterisk', color: '#F96B13' },
  { label: 'FreePBX', color: '#FC0' },
  { label: 'NetSapiens', color: '#00448A' },
];

/* ── Components ───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="fv-hero">
      <p className="fv-hero__eyebrow">Fanvil Link Technology — Official Support</p>
      <h1 className="fv-hero__title">
        Fanvil <span>Knowledge Base</span>
      </h1>
      <p className="fv-hero__subtitle">
        Guides, manuals, integration docs, firmware changelogs, and FAQs for all Fanvil A&amp;V-IoT devices.
      </p>

      <div className="fv-quicklinks">
        {QUICK_LINKS.map((ql) => (
          <Link key={ql.label} className="fv-quicklink" to={ql.href}>
            {ql.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <div className="fv-stats">
      {[
        { num: '200+', label: 'Product Models' },
        { num: '50+', label: 'Countries' },
        { num: '3', label: 'R&D Centers' },
        { num: '15+', label: 'Years Experience' },
      ].map((s) => (
        <div key={s.label} className="fv-stat">
          <span className="fv-stat__num">{s.num}</span>
          <span className="fv-stat__label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function ProductCard({ icon, title, desc, link, badge, badgeType }) {
  return (
    <Link className="fv-card" to={link}>
      <div className="fv-card__icon">{icon}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
        <p className="fv-card__title" style={{ margin: 0 }}>{title}</p>
        {badge && (
          <span className={`fv-badge fv-badge--${badgeType || 'updated'}`}>{badge}</span>
        )}
      </div>
      <p className="fv-card__desc">{desc}</p>
      <span className="fv-card__arrow">View docs →</span>
    </Link>
  );
}

function ProductSection() {
  return (
    <section className="fv-section">
      <div className="fv-section__header">
        <p className="fv-section__label">Product Documentation</p>
        <h2 className="fv-section__title">Browse by Product Category</h2>
        <p className="fv-section__desc">
          Find setup guides, user manuals, and technical specs for every Fanvil product line.
        </p>
      </div>
      <div className="fv-grid fv-grid--4">
        {PRODUCT_CATEGORIES.map((p) => (
          <ProductCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

function GettingStartedSection() {
  const steps = [
    {
      step: '01',
      title: 'Unbox & Connect',
      desc: 'Connect your Fanvil device to the network via Ethernet (PoE) or power adapter. The phone will boot and display its IP address.',
      link: '/docs/getting-started/quick-start',
    },
    {
      step: '02',
      title: 'Register a SIP Account',
      desc: 'Open the web interface, navigate to Account → SIP Account, and enter your SIP server credentials from your PBX or hosted provider.',
      link: '/docs/getting-started/sip-registration',
    },
    {
      step: '03',
      title: 'Configure Auto Provisioning',
      desc: 'Use Fanvil\'s FDPS (Free Device Provisioning Server) to deploy configuration files to multiple devices at once — zero-touch provisioning.',
      link: '/docs/getting-started/auto-provisioning',
    },
    {
      step: '04',
      title: 'Integrate with Your PBX',
      desc: 'Follow our integration guides for 3CX, Microsoft Teams, Zoom, PortSIP, BroadSoft, and more.',
      link: '/docs/integrations/3cx',
    },
  ];

  return (
    <section className="fv-section fv-section--gray">
      <div className="fv-section__header">
        <p className="fv-section__label">Start Here</p>
        <h2 className="fv-section__title">Getting Started in 4 Steps</h2>
        <p className="fv-section__desc">
          New to Fanvil? Follow these steps to get your device up and running in minutes.
        </p>
      </div>
      <div className="fv-grid fv-grid--2" style={{ maxWidth: 960, margin: '0 auto' }}>
        {steps.map((s) => (
          <Link key={s.step} className="fv-card fv-card--accent" to={s.link}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{
                fontSize: '2rem', fontWeight: 800, color: 'rgba(0,47,108,0.12)',
                lineHeight: 1, minWidth: 48,
              }}>{s.step}</span>
              <div>
                <p className="fv-card__title">{s.title}</p>
                <p className="fv-card__desc">{s.desc}</p>
                <span className="fv-card__arrow">Read guide →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section className="fv-section">
      <div className="fv-section__header">
        <p className="fv-section__label">Industry Solutions</p>
        <h2 className="fv-section__title">Solutions for Every Industry</h2>
        <p className="fv-section__desc">
          Fanvil offers tailored A&amp;V-IoT solutions for diverse enterprise and institutional environments.
        </p>
      </div>
      <div className="fv-grid fv-grid--3">
        {SOLUTIONS.map((s) => (
          <Link key={s.title} className="fv-card" to={s.link}>
            <div className="fv-card__icon">{s.icon}</div>
            <p className="fv-card__title">{s.title}</p>
            <p className="fv-card__desc">{s.desc}</p>
            <span className="fv-card__arrow">Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section className="fv-section fv-section--gray">
      <div className="fv-section__header">
        <p className="fv-section__label">Compatibility</p>
        <h2 className="fv-section__title">Works with Your Platform</h2>
        <p className="fv-section__desc">
          Fanvil devices are compatible with all major SIP PBX and UCaaS platforms out of the box.
        </p>
      </div>
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '0.75rem',
        justifyContent: 'center', maxWidth: 700, margin: '0 auto 2rem',
      }}>
        {INTEGRATIONS.map((i) => (
          <span key={i.label} style={{
            background: '#fff', border: '1px solid #E9ECEF',
            borderRadius: 8, padding: '0.5rem 1.25rem',
            fontWeight: 600, fontSize: '0.9rem', color: i.color,
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          }}>{i.label}</span>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <Link className="fv-card__arrow" to="/docs/integrations/3cx" style={{ fontSize: '0.95rem' }}>
          View all integration guides →
        </Link>
      </div>
    </section>
  );
}

function SupportSection() {
  const tiles = [
    {
      icon: '📥',
      title: 'Download Center',
      desc: 'Firmware files, user manuals, admin guides, datasheets, and configuration templates.',
      link: 'https://fanvil.com/service/doc/index.html',
      ext: true,
    },
    {
      icon: '💬',
      title: 'Submit a Ticket',
      desc: 'Open a support ticket for technical issues, RMA requests, or pre-sales questions.',
      link: 'https://fanvil.com/service/help/index.html',
      ext: true,
    },
    {
      icon: '🔒',
      title: 'Security Center',
      desc: 'Security advisories, CVE reports, and vulnerability disclosures for Fanvil products.',
      link: 'https://fanvil.com/service/security/index.html',
      ext: true,
    },
    {
      icon: '🎓',
      title: 'Training & Certification',
      desc: 'Fanvil Academy courses for resellers, integrators, and IT professionals.',
      link: 'https://fanvil.com/partners/college.html',
      ext: true,
    },
  ];

  return (
    <section className="fv-section">
      <div className="fv-section__header">
        <p className="fv-section__label">Support Resources</p>
        <h2 className="fv-section__title">More Ways to Get Help</h2>
      </div>
      <div className="fv-grid fv-grid--4">
        {tiles.map((t) => (
          <a key={t.title} className="fv-card" href={t.link}
            target={t.ext ? '_blank' : undefined}
            rel={t.ext ? 'noopener noreferrer' : undefined}
          >
            <div className="fv-card__icon">{t.icon}</div>
            <p className="fv-card__title">{t.title}</p>
            <p className="fv-card__desc">{t.desc}</p>
            <span className="fv-card__arrow">{t.ext ? 'Visit ↗' : 'Read →'}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Fanvil Knowledge Base | Official Support Center"
      description="Official Fanvil knowledge base — setup guides, user manuals, firmware changelogs, integration docs for X Series, V Series, H Series IP phones and security products."
    >
      <HeroSection />
      <StatsBar />
      <ProductSection />
      <GettingStartedSection />
      <SolutionsSection />
      <IntegrationsSection />
      <SupportSection />
    </Layout>
  );
}