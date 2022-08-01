import React from 'react';
import FooterSocialMedia from './FooterSocialMedia';
import FooterContact from './FooterContact';
import FooterTerms from './FooterTerms';
import styles from '../../styles/components/footer/Footer.module.css';

export default function MobileFooter() {
  return (
    <footer className={ styles.mobileFooter }>
      <section className={ styles.mobileFooter1stSection }>
        <FooterSocialMedia />
      </section>
      <section className={ styles.mobileFooter2ndSection }>
        <FooterContact />
        <FooterTerms />
      </section>
      <section className={ styles.mobileFooter3rdSection }>
        
      </section>
    </footer>
  );
}
