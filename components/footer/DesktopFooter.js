import React from 'react';
import FooterSocialMedia from './FooterSocialMedia';
import FooterContact from './FooterContact';
import FooterTerms from './FooterTerms';
import styles from '../../styles/components/footer/Footer.module.css';
import FooterPartners from './FooterPartners';

export default function DesktopFooter() {
  return (
    <footer className={ styles.desktopFooter }>
      <section className={ styles.desktopFooter1stSection }>
        <FooterSocialMedia />
      </section>
      <section className={ styles.desktopFooter2ndSection }>
        <FooterContact />
        <FooterTerms />
      </section>
      <section className={ styles.desktopFooter3rdSection }>
        <FooterPartners />
        <h3>© NG.CASH SERVIÇOS FINANCEIROS LTDA. | CNPJ 40.940.251/0001-70</h3>
      </section>
    </footer>
  );
}
