import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate id="site.title">{siteConfig.title}</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate id="site.tagline">{siteConfig.tagline}</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/api">
            <Translate id="site.tagline-button">Go to Hubs API Docs</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <a
          style={{
            display: 'block',
            width: '300px',
            margin: '0 auto 60px',
            padding: '15px 30px',
            textAlign: 'center',
            fontFamily: 'var(--ifm-heading-font-family)',
            fontSize: '1.2rem',
            color: 'var(--ifm-font-color-base-inverse)',
            backgroundColor: 'var(--ifm-color-primary)',
            border: 'none', 
            borderRadius: '10px', 
          }}
          href="https://demo.xrcloud.belivvr.com/trial/XRCI-S6yhbKLQwcja2cmTQYKI"
          target="_blank"
        >
          <Translate id="site.experience-metaverse">Experience Metaverse</Translate>
        </a> */}
      </main>
    </Layout>
  );
}
