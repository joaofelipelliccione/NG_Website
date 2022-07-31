import React from 'react';
import MobImgText from '../MobImgText';
import ngCardOutOfBox from '../../assets/home_ngcard_out_of_box.svg';
import description from '../../assets/mobile/home/home_mob_3rd_text.svg';
import styles from '../../styles/pages/home.module.css';

export default function Homepage3rdSection() {
  return (
    <section className={ styles.homepage3rdSection }>
      <MobImgText
        wrapperClassName={ styles.homepage3rdSectionWrapper }
        picClassName={ styles.ngCardOutOfBox }
        picSrc={ ngCardOutOfBox }
        picAlt="NG.Card saindo da caixa"
        textClassName={ styles.homepage3rdSectionTextMob }
        textSrc={ description }
        textAlt="Propósito NG.CASH"
      />
    </section>
  );
}
