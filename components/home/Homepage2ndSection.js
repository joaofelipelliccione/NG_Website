import React from 'react';
import ImgBtn from '../ImgBtn';
import homeMobSteps from '../../assets/mobile/home/home_mob_steps.svg';
import downloadAppBtn from '../../assets/download_app_btn.svg';
import styles from '../../styles/pages/home.module.css';
import Img from '../Img';

export default function Homepage2ndSection() {
  return (
    <section className={ styles.homepage2ndSection }>
      <Img
        imgClassName={ styles.home2ndSectionStepsMob }
        imgSrc={ homeMobSteps }
        imgAlt="Comece já!"
      />
      <ImgBtn
        imgClassName={ styles.headerDownloadAppBtn }
        href="https://www.google.com.br/"
        target="_blank"
        imgSrc={ downloadAppBtn }
        imgAlt="Botão de Download"
      />
    </section>
  );
}
