import React from 'react';
import PropTypes from 'prop-types';
import ngLogo from '../assets/logo_ng_cash.gif';
import HeaderHamburger from './HeaderHamburger';
import DesktopNavbar from './desktop/DesktopNavbar';
import ImgBtn from './ImgBtn';
import downloadAppBtn from '../assets/download_app_btn.svg';
import styles from '../styles/components/Header.module.css';

export default function Header({ isHambContentOpen, setIsHambContentOpen }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className={ styles.header }>
      <ImgBtn
        imgClassName={ styles.headerLogo }
        imgSrc={ ngLogo }
        imgAlt="Logo NG.CASH"
        href="/"
        passHrefValue={ false }
      />
      <HeaderHamburger
        isHambContentOpen={ isHambContentOpen }
        setIsHambContentOpen={ setIsHambContentOpen }
      />
      <div className={ styles.desktopNavbarContainer }>
        <DesktopNavbar />
        <ImgBtn
          imgClassName={ styles.headerDownloadAppBtn }
          imgSrc={ downloadAppBtn }
          imgAlt="Botão de Download"
          href="https://www.google.com.br/"
          passHrefValue
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  isHambContentOpen: PropTypes.bool.isRequired,
  setIsHambContentOpen: PropTypes.func.isRequired,
};
