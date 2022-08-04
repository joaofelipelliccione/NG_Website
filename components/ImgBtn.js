import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function ImgBtn({ imgClassName, href, target, imgSrc, imgAlt }) {
  return (
    <div className={ imgClassName }>
      <a
        href={ href }
        target={ target }
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
  imgClassName: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  imgSrc: PropTypes.shape({}).isRequired,
  imgAlt: PropTypes.string.isRequired,
};

ImgBtn.defaultProps = {
  target: '',
};
