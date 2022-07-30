import React from 'react';
import PropTypes from 'prop-types';
import ImgBtn from './ImgBtn';
import appStore from '../assets/app_store.svg';
import googlePlayStore from '../assets/google_play_store.svg';

export default function StoresBtns({ containerClassName, btnClassName }) {
  return (
    <div className={ containerClassName }>
      <ImgBtn
        imgClassName={ btnClassName }
        imgSrc={ googlePlayStore }
        imgAlt="Baixe o app na Google Play Store!"
        href="https://play.google.com/store/apps/details?id=com.neaglebank"
      />
      <ImgBtn
        imgClassName={ btnClassName }
        imgSrc={ appStore }
        imgAlt="Baixe o app na Apple App Store!"
        href="https://apps.apple.com/app/id1480105326"
      />
    </div>
  );
}

StoresBtns.propTypes = {
  containerClassName: PropTypes.string.isRequired,
  btnClassName: PropTypes.string.isRequired,
};
