import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import ImgWithText from '../ImgWithText';
import ngCard from '../../assets/home_ngcard.svg';
import descriptionNgCardMob from '../../assets/mobile/home/home_mob_5th_text_1.svg';
import transferCards from '../../assets/home_transfer_cards.svg';
import descriptionTransferMob from '../../assets/mobile/home/home_mob_5th_text_2.svg';
import descriptionDesktop1 from '../../assets/desktop/home/home_desktop_5th_text_1.svg';
import descriptionDesktop2 from '../../assets/desktop/home/home_desktop_5th_text_2.svg';
import styles from '../../styles/pages/home.module.css';

export default function Homepage5thSection() {
  const biggerThan1079 = useMediaPredicate('(min-width: 1079px)');

  return (
    <section className={ styles.homepage5thSection }>
      <ImgWithText
        wrapperClassName={ styles.homepage5thSectionWrapper1 }
        img1ClassName={ styles.ngCard }
        img1Src={ ngCard }
        img1Alt="NG.Card mesclando com smartphone"
        img2ClassName={ styles.homepage5thSectionTextMob1 }
        img2Src={ biggerThan1079 ? descriptionDesktop1 : descriptionNgCardMob }
        img2Alt="Descrição do NG.Card"
      />
      <ImgWithText
        wrapperClassName={ styles.homepage5thSectionWrapper2 }
        img1ClassName={ styles.transferCards }
        img1Src={ transferCards }
        img1Alt="Cartões com os tipos de transferências"
        img2ClassName={ styles.homepage5thSectionTextMob2 }
        img2Src={ biggerThan1079 ? descriptionDesktop2 : descriptionTransferMob }
        img2Alt="Descrição do NG.Card"
      />
    </section>
  );
}
