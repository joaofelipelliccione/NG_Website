import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

export default function ImgBtn({ imgClassName, imgSrc, imgAlt, href, passHrefValue }) {
  return (
    <div className={ imgClassName }>
      <Link
        href={ href }
        passHref={ passHrefValue }
      >
        <Image
          src={ imgSrc }
          alt={ imgAlt }
          layout="responsive"
        />
      </Link>
    </div>
  );
}

ImgBtn.propTypes = {
  href: PropTypes.string.isRequired,
  passHrefValue: PropTypes.bool.isRequired,
  imgClassName: PropTypes.string.isRequired,
  imgSrc: PropTypes.objectOf(PropTypes.string).isRequired,
  imgAlt: PropTypes.string.isRequired,
};
