import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import {useColorMode} from '@docusaurus/theme-common';

const features = [
  {
    title: 'CoDrone EDU',
    image: '/img/main/CDE.png',
    link: '/docs/CoDroneEDU',
  },
  {
    title: 'CoDrone Mini',
    image: '/img/main/CDM.png',
    link: '/docs/CoDroneMini',
  },
  {
    title: 'CoDrone Pro/Lite',
    image: '/img/main/Zumi.png',
    link: '/docs/Zumi',
  },
  {
    title: 'Zumi',
    image: '/img/main/CDP.png',
    link: '/docs/CoDronePro_Lite',
  },
]

export default function Home() {

  return (
    <Layout>
      <div className="hero_wrap">
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
                    className="feature-image"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
