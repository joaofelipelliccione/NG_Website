import React from 'react';
import styles from '../styles/pages/home.module.css';
import Homepage1stSection from '../components/home/Homepage1stSection';
import Homepage2ndSection from '../components/home/Homepage2ndSection';
import NewsSection from '../components/home/NewsSection';
import Homepage3rdSection from '../components/home/Homepage3rdSection';

export default function Home() {
  return (
    <main className={ styles.homePageMain }>
      <Homepage1stSection />
      <Homepage2ndSection />
      <NewsSection />
      <Homepage3rdSection />
    </main>
  );
}
