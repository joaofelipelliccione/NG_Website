import React from 'react';
import styles from '../styles/pages/home.module.css';
import Homepage1stSection from '../components/home/Homepage1stSection';

export default function Home() {
  return (
    <main className={ styles.homePageMain }>
      <Homepage1stSection />
      <section className={ styles.homepageSecondSection }>
        <h1>Seção 2</h1>
      </section>
    </main>
  );
}
