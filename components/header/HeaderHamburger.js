/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import styles from '../../styles/components/header/Header.module.css';

export default function HeaderHamburger({ isHambContentOpen, setIsHambContentOpen }) {
  // REF: https://codepen.io/diegotorres/pen/WxaxKo

  return (
    <div className={ styles.headerHamburgerContainer }>
      <div
        id={ styles.headerButtonFlipper }
        className={ isHambContentOpen ? styles.openMenu : styles.closeMenu }
      >
        <button
          className={ styles.headerHamburgerBtn }
          type="button"
          onClick={ () => setIsHambContentOpen(true) }
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="15" width="40" height="2" stroke="var(--white)" strokeWidth="2" />
            <rect x="25" y="28" width="32" height="2" stroke="var(--white)" strokeWidth="2" />
          </svg>
        </button>
        <button
          className={ styles.headerCloseBtn }
          type="button"
          onClick={ () => setIsHambContentOpen(false) }
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
