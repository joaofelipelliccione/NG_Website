import React from 'react';
import Img from '../Img';
import trampolinLogo from '../../assets/logos/trampolin_logo.png';
import stoneLogo from '../../assets/logos/stone_logo.png';
import styles from '../../styles/components/footer/Footer.module.css';

export default function FooterPartners() {
  return (
    <div className={ styles.footerPartners }>
      <Img
        imgClassName={ styles.trampolinLogo }
        imgSrc={ trampolinLogo }
        imgAlt="Logo da Trampolin Pagamentos®"
      />
      <Img
        imgClassName={ styles.stoneLogo }
        imgSrc={ stoneLogo }
        imgAlt="Logo da Stone®"
      />
    </div>
  );
}
