import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import Img from '../Img';
import homeMob4thCover from '../../assets/mobile/home/home_mob_4th_cover.svg';
import homeDesktop4thCover from '../../assets/desktop/home/home_desktop_4th_cover.svg';
import styles from '../../styles/pages/home.module.css';

export default function Homepage4thSection() {
  const biggerThan1079 = useMediaPredicate('(min-width: 1079px)');

  return (
    <section className={ styles.homepage4thSection }>
      <Img
        imgClassName={ styles.home4thSectionCover }
        imgSrc={ biggerThan1079 ? homeDesktop4thCover : homeMob4thCover }
        imgAlt="Comece já!"
      />
    </section>
  );
}
