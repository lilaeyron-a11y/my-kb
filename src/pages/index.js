import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const PRODUCTS = [
  {
    id: 'headphones',
    name: 'Headphones',
    line: 'AH Series',
    desc: 'Over-ear wireless headphones with active noise cancellation.',
    models: ['AH-1','AH-2','AH-3','AH-4','AH-5'],
    href: '/docs/products/headphones/overview',
    color: '#F5F5F7',
  },
  {
    id: 'mouse',
    name: 'Mouse',
    line: 'AM Series',
    desc: 'Precision wireless mice engineered for all-day comfort.',
    models: ['AM-1','AM-2','AM-3','AM-4','AM-5'],
    href: '/docs/products/mouse/overview',
    color: '#F5F5F7',
  },
  {
    id: 'keyboard',
    name: 'Keyboard',
    line: 'AK Series',
    desc: 'Compact mechanical keyboards with customizable layouts.',
    models: ['AK-1','AK-2','AK-3','AK-4','AK-5'],
    href: '/docs/products/keyboard/overview',
    color: '#F5F5F7',
  },
];

const TOPICS = [
  { label: 'Getting Started',  desc: 'Setup guides and first-use instructions.',         href: '/docs/getting-started/intro' },
  { label: 'Tutorials',        desc: 'Step-by-step walkthroughs for common tasks.',       href: '/docs/learn/tutorials/pairing-headphones' },
  { label: 'How-to Guides',    desc: 'Task-focused instructions for specific workflows.', href: '/docs/learn/how-to/update-firmware' },
  { label: 'API Reference',    desc: 'Full REST API documentation and schemas.',          href: '/docs/api/overview' },
  { label: 'Troubleshooting',  desc: 'Diagnose and resolve common issues.',               href: '/docs/support/troubleshooting/headphones' },
  { label: 'FAQ',              desc: 'Answers to frequently asked questions.',            href: '/docs/support/faq' },
];

// SVG product illustrations — minimal line art placeholder
function ProductIllustration({ type }) {
  const illustrations = {
    headphones: (
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <ellipse cx="80" cy="68" rx="38" ry="32" stroke="#1D1D1F" strokeWidth="2.5" fill="none"/>
        <path d="M42 68 C42 44 118 44 118 68" stroke="#1D1D1F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <rect x="34" y="60" width="12" height="22" rx="6" stroke="#1D1D1F" strokeWidth="2" fill="#F5F5F7"/>
        <rect x="114" y="60" width="12" height="22" rx="6" stroke="#1D1D1F" strokeWidth="2" fill="#F5F5F7"/>
      </svg>
    ),
    mouse: (
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <path d="M60 75 C60 48 100 48 100 75 L96 95 C96 102 64 102 64 95 Z" stroke="#1D1D1F" strokeWidth="2.5" fill="#F5F5F7"/>
        <line x1="80" y1="48" x2="80" y2="75" stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="80" cy="67" r="4" stroke="#1D1D1F" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    keyboard: (
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect x="24" y="44" width="112" height="52" rx="6" stroke="#1D1D1F" strokeWidth="2.5" fill="#F5F5F7"/>
        {[0,1,2,3,4,5].map(i => [0,1,2].map(j => (
          <rect key={`${i}-${j}`} x={32 + i*17} y={52 + j*14} width="11" height="9" rx="2" stroke="#1D1D1F" strokeWidth="1.2" fill="white"/>
        )))}
        <rect x="60" y="80" width="40" height="9" rx="2" stroke="#1D1D1F" strokeWidth="1.2" fill="white"/>
      </svg>
    ),
  };
  return illustrations[type] || null;
}

export default function Home() {
  return (
    <Layout title="Aeyron Technology — Documentation" description="Official knowledge base for Aeyron products.">

      {/* Hero */}
      <header className="ax-hero">
        <div className="ax-container">
          <p className="ax-eyebrow">Aeyron Technology · Support &amp; Documentation</p>
          <h1 className="ax-hero-title">How can we help you?</h1>
          <p className="ax-hero-sub">
            Find guides, manuals, API references, and support resources
            for all Aeyron products.
          </p>
          <div className="ax-hero-actions">
            <Link className="ax-btn ax-btn-primary" to="/docs/getting-started/intro">Get started</Link>
            <Link className="ax-btn ax-btn-ghost" to="/docs/support/faq">Browse FAQ</Link>
          </div>
        </div>
      </header>

      <main>

        {/* Products */}
        <section className="ax-section">
          <div className="ax-container">
            <h2 className="ax-section-title">Products</h2>
            <div className="ax-product-grid">
              {PRODUCTS.map(p => (
                <div key={p.id} className="ax-product-card">
                  <div className="ax-product-illustration">
                    <ProductIllustration type={p.id} />
                  </div>
                  <div className="ax-product-info">
                    <span className="ax-product-line">{p.line}</span>
                    <h3 className="ax-product-name">{p.name}</h3>
                    <p className="ax-product-desc">{p.desc}</p>
                    <div className="ax-model-list">
                      {p.models.map(m => (
                        <Link
                          key={m}
                          className="ax-model-chip"
                          to={`/docs/products/${p.id}/${m}/user-manual`}
                        >{m}</Link>
                      ))}
                    </div>
                    <Link className="ax-product-link" to={p.href}>
                      View all documentation →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="ax-section ax-section-alt">
          <div className="ax-container">
            <h2 className="ax-section-title">Documentation</h2>
            <div className="ax-topic-grid">
              {TOPICS.map(t => (
                <Link key={t.label} className="ax-topic-card" to={t.href}>
                  <span className="ax-topic-title">{t.label}</span>
                  <span className="ax-topic-desc">{t.desc}</span>
                  <span className="ax-topic-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}