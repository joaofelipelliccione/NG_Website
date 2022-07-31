import React from 'react';
import PropTypes from 'prop-types';
import ImgBtn from './ImgBtn';
import appStore from '../assets/buttons/app_store.png';
import googlePlayStore from '../assets/buttons/google_play_store.png';

export default function StoresBtns({ containerClassName, btnClassName }) {
  return (
    <div className={ containerClassName }>
      <ImgBtn
        imgClassName={ btnClassName }
        href="https://play.google.com/store/apps/details?id=com.neaglebank"
        target="_blank"
        imgSrc={ googlePlayStore }
        imgAlt="Baixe o app na Google Play Store!"
      />
      <ImgBtn
        imgClassName={ btnClassName }
        href="https://apps.apple.com/app/id1480105326"
        target="_blank"
        imgSrc={ appStore }
        imgAlt="Baixe o app na Apple App Store!"
      />
    </div>
  );
}

StoresBtns.propTypes = {
  containerClassName: PropTypes.string.isRequired,
  btnClassName: PropTypes.string.isRequired,
};
