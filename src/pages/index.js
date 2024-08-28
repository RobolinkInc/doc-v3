import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import {useColorMode} from '@docusaurus/theme-common';
import Translate, {translate} from '@docusaurus/Translate';

const features = [
  {
    title: 'CDE',
    image: '/img/main/CDEJ_fusion_img.jpg',
    temp_image: 'img/main/CDE.png',
    link: '/docs/CoDroneEDU',
    Head_text: 'CoDrone EDU',
    Body_text: 'Python & Blockly. A color-sensing, obstacle detecting, programmable drone'
  },
  {
    title: 'CDM',
    image: '/img/main/CDM_img.png',
    temp_image: '/img/main/CDM.png',
    link: '/docs/CoDroneMini',
    Head_text: 'CoDrone Mini',
    Body_text: 'Learn Python and Blockly that can make a mini drone fly'
  },
  {
    title: 'ZUMI',
    image: '/img/main/Zumi_img.png',
    temp_image: '/img/main/Zumi.png',
    link: '/docs/Zumi',
    Head_text: 'Zumi',
    Body_text: 'Learn AI with a self-driving car'
  },
  {
    title: 'CDP',
    image: '/img/main/CDP_img.png',
    temp_image: '/img/main/CDP.png',
    link: '/docs/CoDronePro_Lite',
    Head_text: 'CoDrone Pro/Lite',
    Body_text: 'Learn to build a remote and write programs to make your code fly'
  },
]

export default function Home() {

  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  return (
    <Layout>
      <div className="hero_wrap">
        <div className="hero">
          <div className="container">
            <h3 className="hero__title">
              <Translate id="main.title">Robolink Library Documentation</Translate>
              </h3>
            <h6 className="hero__subtitle"><Translate id="main.sub.title">Learn about how to use the library functions and blocks for the coding platforms of our robots and drones</Translate></h6>
            <h1 className="select__title"><Translate id="main.select.title">Select a kit</Translate></h1>
            <div className="features">
              {features.map((feature, index) => (
                <a key={index} href={currentLocale === 'en' ? `${feature.link}` : `/${currentLocale}${feature.link}`}>
                  <div className='feature'>
                    <div className='feature_img'>
                      <img
                        src={feature.image}
                        className={feature.title+'_feature_img'}
                      />
                    </div>
                    <div className='description'>
                      <div className={feature.title+'_description'}>
                        <h2>{feature.Head_text}</h2>
                        <h4>{feature.Body_text}</h4>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
