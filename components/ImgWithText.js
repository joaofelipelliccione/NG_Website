import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img';

export default function ImgWithText({
  wrapperClassName,
  img1ClassName, img1Src, img1Alt,
  img2ClassName, img2Src, img2Alt,
}) {
  return (
    <div className={ wrapperClassName }>
      <Img
        imgClassName={ img1ClassName }
        imgSrc={ img1Src }
        imgAlt={ img1Alt }
      />
      <Img
        imgClassName={ img2ClassName }
        imgSrc={ img2Src }
        imgAlt={ img2Alt }
      />
    </div>
  );
}

ImgWithText.propTypes = {
  wrapperClassName: PropTypes.string.isRequired,
  img1ClassName: PropTypes.string.isRequired,
  img1Src: PropTypes.shape({}).isRequired,
  img1Alt: PropTypes.string.isRequired,
  img2ClassName: PropTypes.string.isRequired,
  img2Src: PropTypes.shape({}).isRequired,
  img2Alt: PropTypes.string.isRequired,
};
