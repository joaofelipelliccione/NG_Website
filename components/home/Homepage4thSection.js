import React from 'react';
import Img from '../Img';
import homeMob4thCover from '../../assets/mobile/home/home_mob_4th_cover.png';
import homeDesktop4thCover from '../../assets/desktop/home/home_desktop_4th_cover.svg';
import styles from '../../styles/pages/home.module.css';

export default function Homepage4thSection() {
  return (
    <section className={ styles.homepage4thSection }>
      <Img
        imgClassName={ styles.homeMob4thSectionCover }
        imgSrc={ homeMob4thCover }
        imgAlt="Comece já!"
      />
      <Img
        imgClassName={ styles.homeDesktop4thSectionCover }
        imgSrc={ homeDesktop4thCover }
        imgAlt="Comece já!"
      />
    </section>
  );
}
