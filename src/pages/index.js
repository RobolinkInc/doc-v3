import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
const features = [
  {
    title: 'CoDrone EDU',
    image: '/doc-v3/img/docusaurus.png',
    link: '/doc-v3/docs/CoDroneEDU',
  },
  {
    title: 'CoDrone Mini',
    image: '/doc-v3/img/docusaurus.png',
    link: '/doc-v3/docs/CoDroneMini',
  },
  {
    title: 'CoDrone Pro/Lite',
    image: '/doc-v3/img/docusaurus.png',
    link: '/doc-v3/docs/CoDronePro_Lite',
  },
  {
    title: 'Zumi',
    image: '/doc-v3/img/docusaurus.png',
    link: '/doc-v3/docs/Zumi',
  },
]


export default function Home() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="features">
            {features.map((feature, index) => (
              <a key={index} href={feature.link} className="feature">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image"
                />
                <div className="feature-title">{feature.title}</div>
                <div className="feature-description">{feature.description}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
