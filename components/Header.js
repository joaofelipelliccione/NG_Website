import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import ngLogo from '../assets/logo_ng_cash.gif';
import HeaderHamburger from './HeaderHamburger';
import DesktopNavbar from './desktop/DesktopNavbar';
import ImgBtn from './ImgBtn';
import styles from '../styles/components/Header.module.css';

const ngLogoStyle = {
  animationDuration: '1s',
  animationTimingFunction: 'ease-out',
  animationDelay: '0s',
  animationIterationCount: 1,
  animationName: 'slideInFromLeft',
};

export default function Header({ isHambContentOpen, setIsHambContentOpen }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className={ styles.header }>
      <Link
        href="/"
        passHref={ false }
      >
        <Image
          src={ ngLogo }
          alt="Logo NG.CASH"
          width={ 95 }
          height={ 95 }
          style={ ngLogoStyle }
        />
      </Link>
      <HeaderHamburger
        isHambContentOpen={ isHambContentOpen }
        setIsHambContentOpen={ setIsHambContentOpen }
      />
      <div className={ styles.desktopNavbarContainer }>
        <DesktopNavbar />
        <ImgBtn widthPercent="110%" />
      </div>
    </header>
  );
}

Header.propTypes = {
  isHambContentOpen: PropTypes.bool.isRequired,
  setIsHambContentOpen: PropTypes.func.isRequired,
};
