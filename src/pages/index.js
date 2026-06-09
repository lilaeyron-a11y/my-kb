import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const strengths = [
  {
    title: 'Documentation architecture',
    description:
      'Designing knowledge bases with clear entry points, reusable content patterns, and Diataxis-informed structures.',
    href: '/docs/portfolio/documentation-system-case-study',
  },
  {
    title: 'Docs-as-code workflow',
    description:
      'Learning and applying Git, Docusaurus, Markdown, API docs, CI/CD, and publishing pipelines for modern documentation teams.',
    href: '/docs/knowledge/docs-as-code',
  },
  {
    title: 'Technical communication growth',
    description:
      'Building a public learning record across technical writing, content strategy, UX writing, and AI-assisted documentation.',
    href: '/docs/learning-roadmap/overview',
  },
];

const highlights = [
  {
    label: 'Portfolio',
    title: 'Documentation system case study',
    text: 'A fictional corporate knowledge base used to demonstrate product documentation, support flows, API reference, and localization thinking.',
    href: '/docs/portfolio/documentation-system-case-study',
  },
  {
    label: 'Knowledge base',
    title: 'Technical writing notes',
    text: 'Working notes on Diataxis, DITA, Markdown, API documentation, docs-as-code, and the wider technical communication field.',
    href: '/docs/knowledge/technical-writing',
  },
  {
    label: 'Career roadmap',
    title: 'From learner to strategist',
    text: 'A transparent roadmap for becoming a technical writer, documentation engineer, content strategist, and AI documentation consultant.',
    href: '/docs/learning-roadmap/career-notes',
  },
];

export default function Home() {
  return (
    <Layout
      title="Aeyron | Technical Writing Portfolio"
      description="A technical writing portfolio and knowledge base for documentation architecture, docs-as-code, and technical communication learning."
    >
      <header className="ax-hero ax-hero-portfolio">
        <div className="ax-container ax-hero-grid">
          <div>
            <p className="ax-eyebrow">Technical writing portfolio and knowledge base</p>
            <h1 className="ax-hero-title">
              Designing documentation systems for complex products and growing teams.
            </h1>
            <p className="ax-hero-sub">
              I am Aeyron, a technical communication learner building a public portfolio around
              documentation architecture, API documentation, docs-as-code, Docusaurus, DITA,
              Markdown, and AI-assisted knowledge work.
            </p>
            <div className="ax-hero-actions">
              <Link className="ax-btn ax-btn-primary" to="/docs/portfolio/intro">
                View portfolio
              </Link>
              <Link className="ax-btn ax-btn-ghost" to="/docs/learning-roadmap/overview">
                Read roadmap
              </Link>
            </div>
          </div>
          <div className="ax-signal-panel" aria-label="Portfolio focus areas">
            <div className="ax-signal-row">
              <span>Target roles</span>
              <strong>Technical Writer · IA · Docs Engineer · UX Writer</strong>
            </div>
            <div className="ax-signal-row">
              <span>Core stack</span>
              <strong>DITA · Markdown · Oxygen XML · HTML · CSS · Docusaurus</strong>
            </div>
            <div className="ax-signal-row">
              <span>Current focus</span>
              <strong>API docs · CI/CD · Git · Docs-as-code · AI</strong>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="ax-section">
          <div className="ax-container">
            <div className="ax-section-heading">
              <p className="ax-section-kicker">What this site proves</p>
              <h2 className="ax-section-title-large">
                A portfolio should show the system, not only the pages.
              </h2>
            </div>
            <div className="ax-strength-grid">
              {strengths.map((item) => (
                <Link className="ax-strength-card" to={item.href} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>Explore</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ax-section ax-section-alt">
          <div className="ax-container">
            <div className="ax-section-heading">
              <p className="ax-section-kicker">Site map</p>
              <h2 className="ax-section-title-large">Three layers: portfolio, knowledge, roadmap.</h2>
            </div>
            <div className="ax-highlight-grid">
              {highlights.map((item) => (
                <Link className="ax-highlight-card" to={item.href} key={item.title}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ax-section">
          <div className="ax-container ax-career-band">
            <div>
              <p className="ax-section-kicker">Career intention</p>
              <h2 className="ax-section-title-large">
                From documentation maker to documentation strategist.
              </h2>
            </div>
            <p>
              This site is designed for job search and long-term growth: to show hiring teams
              how I structure information, learn new technologies, write clearly, and think about
              the future of technical communication with AI.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
