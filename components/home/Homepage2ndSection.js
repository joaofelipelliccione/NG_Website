import React from 'react';
import ImgBtn from '../ImgBtn';
import homeMobSteps from '../../assets/mobile/home/home_mob_steps.svg';
import homeMob2ndTitle from '../../assets/mobile/home/home_mob_2nd_title.svg';
import homeDesktopSteps from '../../assets/desktop/home/home_desktop_steps.svg';
import homeDesktop2ndTitle from '../../assets/desktop/home/home_desktop_2nd_title.svg';
import downloadAppBtn from '../../assets/buttons/download_app_btn.svg';
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
      <Img
        imgClassName={ styles.home2ndSectionStepsDesktop }
        imgSrc={ homeDesktopSteps }
        imgAlt="Comece já!"
      />
      <Img
        imgClassName={ styles.home2ndSectionTitleMob }
        imgSrc={ homeMob2ndTitle }
        imgAlt="Você está pronto!"
      />
      <Img
        imgClassName={ styles.home2ndSectionTitleDesktop }
        imgSrc={ homeDesktop2ndTitle }
        imgAlt="Você está pronto!"
      />
      <ImgBtn
        imgClassName={ styles.homeDownloadAppBtn }
        href="https://www.google.com.br/"
        target="_blank"
        imgSrc={ downloadAppBtn }
        imgAlt="Botão de Download"
      />
    </section>
  );
}
