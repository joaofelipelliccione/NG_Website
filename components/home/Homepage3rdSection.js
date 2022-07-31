import React from 'react';
import ImgWithText from '../ImgWithText';
import ngCardOutOfBox from '../../assets/home_ngcard_out_of_box.svg';
import description from '../../assets/mobile/home/home_mob_3rd_text.svg';
import styles from '../../styles/pages/home.module.css';

export default function Homepage3rdSection() {
  return (
    <section className={ styles.homepage3rdSection }>
      <ImgWithText
        wrapperClassName={ styles.homepage3rdSectionWrapper }
        img1ClassName={ styles.ngCardOutOfBox }
        img1Src={ ngCardOutOfBox }
        img1Alt="NG.Card saindo da caixa"
        img2ClassName={ styles.homepage3rdSectionTextMob }
        img2Src={ description }
        img2Alt="Propósito NG.CASH"
      />
    </section>
  );
}
