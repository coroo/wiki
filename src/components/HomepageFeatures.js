import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Experienced',
    Svg: require('../../static/img/experienced.svg').default,
    description: (
      <>
        Part of Sequis; 35+ years of experience, 355,000 active policies, and the Best Insurance Awards 2020
      </>
    ),
  },
  {
    title: 'Easy & Fast Process',
    Svg: require('../../static/img/fast_and_easy.svg').default,
    description: (
      <>
        Completely online process! You only need a few clicks to get the e-policy you want
      </>
    ),
  },
  {
    title: 'Trusted',
    Svg: require('../../static/img/trusted.svg').default,
    description: (
      <>
        Registered and supervised by the Financial Services Authority (OJK) and meets certified digital insurance product transaction security standards
        <br/><strong>ISO/IEC 27001:2013</strong>
      </>
    ),
  },
  {
    title: 'Starting from IDR 20k',
    Svg: require('../../static/img/cheap_ic.svg').default,
    description: (
      <>
        Optimal protection at affordable premium prices that can be tailored to your needs
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className={styles.boxFeature }>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title}/>
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p style={{fontSize: '14px'}}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('text--center', styles.subTitleExtra)}>
            Super You by Sequis Online is an online life and health insurance product that is committed to providing the best experience in digital insurance to meet all your financial needs.
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
