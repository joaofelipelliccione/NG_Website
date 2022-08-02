import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import ImgWithText from '../ImgWithText';
import EmojisScrollbar from './EmojisScrollbar';
import ngCardOutOfBox from '../../assets/home_ngcard_out_of_box.svg';
import descriptionMob from '../../assets/mobile/home/home_mob_3rd_text.svg';
import descriptionDesktop from '../../assets/desktop/home/home_desktop_3rd_text.svg';
import styles from '../../styles/pages/home.module.css';

export default function Homepage3rdSection() {
  const biggerThan1079 = useMediaPredicate('(min-width: 1079px)');

  return (
    <section className={ styles.homepage3rdSection }>
      <ImgWithText
        wrapperClassName={ styles.homepage3rdSectionWrapper }
        img1ClassName={ styles.ngCardOutOfBox }
        img1Src={ ngCardOutOfBox }
        img1Alt="NG.Card saindo da caixa"
        img2ClassName={ styles.homepage3rdSectionTextMob }
        img2Src={ biggerThan1079 ? descriptionDesktop : descriptionMob }
        img2Alt="Propósito NG.CASH"
      />
      <EmojisScrollbar />
    </section>
  );
}
