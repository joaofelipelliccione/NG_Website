import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function Img({ imgClassName, imgSrc, imgAlt }) {
  return (
    <div className={ imgClassName }>
      <Image
        src={ imgSrc }
        alt={ imgAlt }
        layout="responsive"
      />
    </div>
  );
}

Img.propTypes = {
  imgClassName: PropTypes.string.isRequired,
  imgSrc: PropTypes.shape({}).isRequired,
  imgAlt: PropTypes.string.isRequired,
};
