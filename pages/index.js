import React from 'react';
import Img from '../components/Img';
import homeMob1stTitle from '../assets/mobile/home/home_mob_1st_title.svg';
import styles from '../styles/pages/home.module.css';

export default function Home() {
  return (
    <main className={ styles.homePageMain }>
      <section className={ styles.homepageFirstSection }>
        <Img
          imgClassName={ styles.homepage1stTitle }
          imgSrc={ homeMob1stTitle }
          imgAlt="1° título da Home"
        />
      </section>
      <section className={ styles.homepageSecondSection }>
        <h1>Seção 2</h1>
      </section>
    </main>
  );
}
