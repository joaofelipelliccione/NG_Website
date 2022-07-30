import React from 'react';
import Img from '../components/Img';
import homeMob1stTitle from '../assets/mobile/home/home_mob_1st_title.svg';
import homeDesktop1stTitle from '../assets/desktop/home/home_desktop_1st_title.svg';
import styles from '../styles/pages/home.module.css';
import StoresBtns from '../components/StoresBtns';

export default function Home() {
  return (
    <main className={ styles.homePageMain }>
      <section className={ styles.homepageFirstSection }>
        <Img
          imgClassName={ styles.homepage1stTitleMob }
          imgSrc={ homeMob1stTitle }
          imgAlt="1° título da Home Mobile"
        />
        <Img
          imgClassName={ styles.homepage1stTitleDesktop }
          imgSrc={ homeDesktop1stTitle }
          imgAlt="1° título da Home Desktop"
        />
        <StoresBtns
          containerClassName={ styles.storesBtnsContainer }
          btnClassName={ styles.storeBtn }
        />
      </section>
      <section className={ styles.homepageSecondSection }>
        <h1>Seção 2</h1>
      </section>
    </main>
  );
}
