import React from 'react';
import FooterSocialMedia from './FooterSocialMedia';
import FooterContact from './FooterContact';
import styles from '../../styles/components/footer/Footer.module.css';

export default function MobileFooter() {
  return (
    <footer className={ styles.mobileFooter }>
      <section className={ styles.mobileFooter1stSection }>
        <FooterSocialMedia />
      </section>
      <section className={ styles.mobileFooter2ndSection }>
        <FooterContact />
      </section>
    </footer>
  );
}
