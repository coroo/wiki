import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import SuperyouLogo from '../../static/img/superyou-logo.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroTilted_3die , styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--1')}></div>
          <div className={clsx('col col--5', styles.homeTitle)}>
            <SuperyouLogo title="Superyou Logo" className="logo"></SuperyouLogo>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--secondary button--lg', styles.buttonDark)}
                to="/docs/integration">
                Let's Do Integration ~ 5min <span class="arr svelte-k79x35">→</span>
              </Link>
            </div>
          </div>
          <div className={clsx('col col--6', styles.homeBanner)}>
            <img src="https://superyou.co.id/img/products/prod-kopi.png" 
              style={{
                width: '400px',
                marginBottom: '-15px'
              }} alt="Temukan jawabannya di sini" title="Temukan jawabannya" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
