import React from 'react';
import styles from '../styles/pages/home.module.css';
import Homepage1stSection from '../components/home/Homepage1stSection';
import Homepage2ndSection from '../components/home/Homepage2ndSection';

export default function Home() {
  return (
    <main className={ styles.homePageMain }>
      <Homepage1stSection />
      <Homepage2ndSection />
    </main>
  );
}
