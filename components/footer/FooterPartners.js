import React from 'react';
import Img from '../Img';
import styles from '../../styles/components/footer/Footer.module.css';

export default function FooterPartners() {
  return (
    <div className={ styles.footerPartners }>
      <Img
        imgClassName={ styles.trampolinLogo }
        imgSrc={ homeMobSteps }
        imgAlt="Logo da Trampolin Pagamentos®"
      />
      <Img
        imgClassName={ styles.stoneLogo }
        imgSrc={ homeMobSteps }
        imgAlt="Logo da Stone®"
      />
    </div>
  );
}
