import React from 'react';
import ImgWithText from '../ImgWithText';
import EmojisScrollbar from './EmojisScrollbar';
import ngCardOutOfBox from '../../assets/home_ngcard_out_of_box.svg';
import descriptionMob from '../../assets/mobile/home/home_mob_3rd_text.svg';
import descriptionDesktop from '../../assets/desktop/home/home_desktop_3rd_text.svg';
import styles from '../../styles/pages/home.module.css';

export default function Homepage3rdSection() {
  return (
    <section className={ styles.homepage3rdSection }>
      <ImgWithText
        wrapperClassName={ styles.homepage3rdSectionWrapperMob }
        img1ClassName={ styles.ngCardOutOfBox }
        img1Src={ ngCardOutOfBox }
        img1Alt="NG.Card saindo da caixa"
        img2ClassName={ styles.homepage3rdSectionTextMob }
        img2Src={ descriptionMob }
        img2Alt="Propósito NG.CASH"
      />
      <ImgWithText
        wrapperClassName={ styles.homepage3rdSectionWrapperDesktop }
        img1ClassName={ styles.ngCardOutOfBox }
        img1Src={ ngCardOutOfBox }
        img1Alt="NG.Card saindo da caixa"
        img2ClassName={ styles.homepage3rdSectionTextDesktop }
        img2Src={ descriptionDesktop }
        img2Alt="Propósito NG.CASH"
      />
      <EmojisScrollbar />
    </section>
  );
}
