import React from 'react';
import Image from 'next/image';
import indexMob1stTitle from '../assets/mobile/index/index_mob_1st_title.svg';
import styles from '../styles/pages/home.module.css';

export default function Home() {
  return (
    <main className={ styles.homePageMain }>
      <section className={ styles.homepageFirstSection }>
        <div className={ styles.homepage1stTitle }>
          <Image
            src={ indexMob1stTitle }
            alt="1° título da Home"
            layout="responsive"
          />
        </div>
      </section>
      <section className={ styles.homepageSecondSection }>
        <h1>Seção 2</h1>
      </section>
    </main>
  );
}
