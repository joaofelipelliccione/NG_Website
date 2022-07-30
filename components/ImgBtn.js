import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function ImgBtn({ imgClassName, imgSrc, imgAlt, href }) {
  return (
    <div className={ imgClassName }>
      <a
        href={ href }
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={ imgSrc }
          alt={ imgAlt }
          layout="responsive"
        />
      </a>
    </div>
  );
}

ImgBtn.propTypes = {
  href: PropTypes.string.isRequired,
  imgClassName: PropTypes.string.isRequired,
  imgSrc: PropTypes.objectOf(PropTypes.string).isRequired,
  imgAlt: PropTypes.string.isRequired,
};
