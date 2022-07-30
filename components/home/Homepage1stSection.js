import React from 'react';
import Img from '../Img';
import homeMob1stTitle from '../../assets/mobile/home/home_mob_1st_title.svg';
import homeDesktop1stTitle from '../../assets/desktop/home/home_desktop_1st_title.svg';
import qrCode from '../../assets/QR_code.svg';
import StoresBtns from '../StoresBtns';
import styles from '../../styles/pages/home.module.css';

export default function Homepage1stSection() {
  return (
    <section className={ styles.homepage1stSection }>
      <Img
        imgClassName={ styles.home1stSectionTitleMob }
        imgSrc={ homeMob1stTitle }
        imgAlt="1° título da Home Mobile"
      />
      <Img
        imgClassName={ styles.home1stSectionTitleDesktop }
        imgSrc={ homeDesktop1stTitle }
        imgAlt="1° título da Home Desktop"
      />
      <Img
        imgClassName={ styles.homepageQrCode }
        imgSrc={ qrCode }
        imgAlt="QR code para baixar o aplicativo"
      />
      <StoresBtns
        containerClassName={ styles.storesBtnsContainer }
        btnClassName={ styles.storeBtn }
      />
    </section>
  );
}
