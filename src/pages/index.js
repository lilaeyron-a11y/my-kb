import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Fanvil Support Center">

      <main className={styles.main}>

        {/* TOP BANNER */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>

            {/* LOGO */}
            <img
              src="/img/fanvil-logo.png"
              className={styles.logo}
              alt="Fanvil"
            />

            <h1>Fanvil Support Center</h1>
            <p>Find products, documents, downloads and solutions</p>

            {/* SEARCH */}
            <div className={styles.searchBox}>
              <input placeholder="Search Fanvil products or documents..." />
            </div>

          </div>
        </section>

        {/* PRODUCT SECTION */}
        <section className={styles.section}>
          <h2>Products</h2>

          <div className={styles.grid}>

            <Link className={styles.card} to="/docs/intro">
              <img src="/img/ip-phone.jpg" />
              <h3>IP Phones</h3>
            </Link>

            <Link className={styles.card} to="/docs/intro">
              <img src="/img/video-intercom.jpg" />
              <h3>Video Intercom</h3>
            </Link>

            <Link className={styles.card} to="/docs/intro">
              <img src="/img/voip.jpg" />
              <h3>VoIP Devices</h3>
            </Link>

            <Link className={styles.card} to="/docs/intro">
              <img src="/img/accessories.jpg" />
              <h3>Accessories</h3>
            </Link>

          </div>
        </section>

        {/* SOLUTIONS */}
        <section className={styles.section}>
          <h2>Solutions</h2>

          <div className={styles.grid}>

            <Link className={styles.card} to="/docs/intro">
              <h3>Enterprise Communication</h3>
              <p>Unified communication systems</p>
            </Link>

            <Link className={styles.card} to="/docs/intro">
              <h3>Hotel Solution</h3>
              <p>Smart hospitality communication</p>
            </Link>

            <Link className={styles.card} to="/docs/intro">
              <h3>Healthcare</h3>
              <p>Nurse call & medical systems</p>
            </Link>

            <Link className={styles.card} to="/docs/intro">
              <h3>Office System</h3>
              <p>Modern office communication</p>
            </Link>

          </div>
        </section>

        {/* SUPPORT */}
        <section className={styles.section}>
          <h2>Support</h2>

          <div className={styles.grid}>

            <Link className={styles.card} to="/docs/intro">
              <h3>Downloads</h3>
              <p>Firmware & manuals</p>
            </Link>

            <Link className={styles.card} to="/docs/intro">
              <h3>Knowledge Base</h3>
              <p>Guides & FAQs</p>
            </Link>

            <Link className={styles.card} to="/docs/intro">
              <h3>Ticket System</h3>
              <p>Submit technical issues</p>
            </Link>

            <Link className={styles.card} to="/docs/intro">
              <h3>Contact Support</h3>
              <p>Get help from us</p>
            </Link>

          </div>
        </section>

      </main>

    </Layout>
  );
}