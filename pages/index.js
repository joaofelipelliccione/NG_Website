import React from 'react';
import Img from '../components/Img';
import indexMob1stTitle from '../assets/mobile/index/index_mob_1st_title.svg';
import styles from '../styles/pages/home.module.css';

export default function Home() {
  return (
    <main className={ styles.homePageMain }>
      <section className={ styles.homepageFirstSection }>
        <Img
          imgClassName={ styles.homepage1stTitle }
          imgSrc={ indexMob1stTitle }
          imgAlt="1° título da Home"
        />
      </section>
      <section className={ styles.homepageSecondSection }>
        <h1>Seção 2</h1>
      </section>
    </main>
  );
}
