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
    image: '/img/docusaurus.png',
    link: '/docs/CoDroneEDU',
  },
  {
    title: 'CoDrone Mini',
    image: '/img/docusaurus.png',
    link: '/docs/CoDroneMini',
  },
  {
    title: 'CoDrone Pro/Lite',
    image: '/img/docusaurus.png',
    link: '/docs/CoDronePro_Lite',
  },
  {
    title: 'Zumi',
    image: '/img/docusaurus.png',
    link: '/docs/Zumi',
  },
]


export default function Home() {

  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <h3 className="hero__title">Robolink Library Documentation</h3>
          <h6 className="hero__subtitle">Learn about how to use the library functions and blocks for the coding platforms of our robots and drones</h6>
          <h1 className="select__title">Select a kit</h1>
          <div className="features">
            {features.map((feature, index) => (
              <a key={index} href={feature.link} className="feature">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image"
                />
                <div className="feature-title">{feature.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
