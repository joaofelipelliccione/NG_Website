import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img';

export default function MobImgText({
  wrapperClassName,
  picClassName, picSrc, picAlt,
  textClassName, textSrc, textAlt,
}) {
  return (
    <div className={ wrapperClassName }>
      <Img
        imgClassName={ picClassName }
        imgSrc={ picSrc }
        imgAlt={ picAlt }
      />
      <Img
        imgClassName={ textClassName }
        imgSrc={ textSrc }
        imgAlt={ textAlt }
      />
    </div>
  );
}

MobImgText.propTypes = {
  wrapperClassName: PropTypes.string.isRequired,
  picClassName: PropTypes.string.isRequired,
  picSrc: PropTypes.string.isRequired,
  picAlt: PropTypes.string.isRequired,
  textClassName: PropTypes.string.isRequired,
  textSrc: PropTypes.string.isRequired,
  textAlt: PropTypes.string.isRequired,
};
