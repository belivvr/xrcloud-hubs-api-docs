import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';

const FeatureList = [
  {
    title: <Translate id="site.contents1.title">Easy Customize</Translate>,
    Svg: require('@site/static/img/contents1.svg').default,
    description: (
      <Translate id="site.contents1.description">
        Easily customize the look and feel of the WebXR Metaverse with XRCloud!
      </Translate>
    ),
  },
  {
    title: <Translate id="site.contents2.title">Access with an Internet browser</Translate>,
    Svg: require('@site/static/img/contents2.svg').default,
    description: (
      <Translate id="site.contents2.description">
        Metaverse implemented with WebXR can be easily accessed
        from any device with only an Internet browser.
      </Translate>
    ),
  },
  {
    title: <Translate id="site.contents3.title">Free Contents</Translate>,
    Svg: require('@site/static/img/contents3.svg').default,
    description: (
      <Translate id="site.contents3.description">
        You can put anything that you can see in your Internet browser into the Metaverse world.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
