import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from '../styles/components/Header.module.css';

export default function HeaderHamburger({ isHambContentOpen, setIsHambContentOpen }) {
  // REF: https://codepen.io/diegotorres/pen/WxaxKo

  const onClickHeaderHamburger = () => {
    if (isHambContentOpen === true) {
      setIsHambContentOpen(false);
    }
    if (isHambContentOpen === false) {
      setIsHambContentOpen(true);
    }
  };

  return (
    <div className={ styles.headerHamburgerContainer }>
      <div
        id={ styles.headerButtonFlipper }
        className={ isHambContentOpen ? styles.openMenu : styles.closeMenu }
      >
        <button
          className={ styles.headerHamburgerBtn }
          type="button"
          onClick={ () => onClickHeaderHamburger() }
        >
          <AiOutlineMenu />
        </button>
        <button
          className={ styles.headerCloseBtn }
          type="button"
          onClick={ () => onClickHeaderHamburger() }
        >
          <AiOutlineClose />
        </button>
      </div>

    </div>
  );
}

HeaderHamburger.propTypes = {
  isHambContentOpen: PropTypes.bool.isRequired,
  setIsHambContentOpen: PropTypes.func.isRequired,
};
