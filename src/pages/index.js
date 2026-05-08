import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Knowledge Base"
      description="Technical documentation and support center">

      <main className={styles.main}>

        {/* HERO */}
        <section className={styles.hero}>
          <h1>How can we help you?</h1>
          <p>Search documentation, guides, and API references</p>

          <div className={styles.searchBox}>
            <input placeholder="Search articles..." />
          </div>

          <div className={styles.quickLinks}>
            <Link to="/docs/intro">Getting Started</Link>
            <Link to="/docs/api">API</Link>
            <Link to="/docs/troubleshooting">Help</Link>
          </div>
        </section>

        {/* CARDS */}
        <section className={styles.grid}>

          <Link className={styles.card} to="/docs/intro">
            <h3>Getting Started</h3>
            <p>Setup and basics</p>
          </Link>

          <Link className={styles.card} to="/docs/api">
            <h3>API Reference</h3>
            <p>Endpoints and authentication</p>
          </Link>

          <Link className={styles.card} to="/docs/guides">
            <h3>Guides</h3>
            <p>Step-by-step tutorials</p>
          </Link>

          <Link className={styles.card} to="/docs/troubleshooting">
            <h3>Troubleshooting</h3>
            <p>Common issues and fixes</p>
          </Link>

        </section>

      </main>
    </Layout>
  );
}