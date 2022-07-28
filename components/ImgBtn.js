import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import downloadAppBtn from '../assets/download_app_btn.svg';

const ImgBtnStyle = {
  cursor: 'pointer',
};

export default function ImgBtn({ widthPercent }) {
  return (
    <Link
      href="https://www.google.com.br/"
      passHref
    >
      <Image
        src={ downloadAppBtn }
        alt="Botão de Baixar App"
        width={ widthPercent }
        style={ ImgBtnStyle }
      />
    </Link>
  );
}

ImgBtn.propTypes = {
  widthPercent: PropTypes.string.isRequired,
};
