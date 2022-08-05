import React from 'react';
import Img from '../Img';
import footerMainText from '../../assets/footer_main_text.svg';
import ImgBtn from '../ImgBtn';
import tikTokLogo from '../../assets/logos/tik_tok_logo.png';
import instagramLogo from '../../assets/logos/instagram_logo.png';
import facebookLogo from '../../assets/logos/facebook_logo.png';
import styles from '../../styles/components/footer/Footer.module.css';

const socialMediaIcons = [
  { iconId: 1, iconImgSrc: tikTokLogo, iconHref: 'https://www.tiktok.com/@ng.cash' },
  { iconId: 2, iconImgSrc: instagramLogo, iconHref: 'https://www.instagram.com/ng.cash_/' },
  { iconId: 3, iconImgSrc: facebookLogo, iconHref: 'https://www.facebook.com/ng.cash.face' },
];

export default function FooterSocialMedia() {
  return (
    <div className={ styles.footerSocialMedia }>
      <Img
        imgClassName={ styles.footerMainText }
        imgSrc={ footerMainText }
        imgAlt="Slogan NG.CASH"
      />
      <div className={ styles.socialMediaBtnsContainer }>
        {socialMediaIcons.map(({ iconId, iconHref, iconImgSrc }) => (
          <ImgBtn
            key={ iconId }
            imgClassName={ styles.socialMediaLogo }
            href={ iconHref }
            target="_blank"
            imgSrc={ iconImgSrc }
            imgAlt="Logo da rede social"
          />
        ))}
      </div>
    </div>
  );
}
