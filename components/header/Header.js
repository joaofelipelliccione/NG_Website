import React from 'react';
import PropTypes from 'prop-types';
import ngLogo from '../../assets/logo_ng_cash.gif';
import HeaderHamburger from './HeaderHamburger';
import DesktopNavbar from './DesktopNavbar';
import ImgBtn from '../ImgBtn';
import downloadAppBtn from '../../assets/buttons/download_app_btn.svg';
import styles from '../../styles/components/header/Header.module.css';

export default function Header({ isHambContentOpen, setIsHambContentOpen }) {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <header className={ styles.header }>
      <ImgBtn
        imgClassName={ styles.headerLogo }
        href="/"
        imgSrc={ ngLogo }
        imgAlt="Logo NG.CASH"
      />
      <HeaderHamburger
        isHambContentOpen={ isHambContentOpen }
        setIsHambContentOpen={ setIsHambContentOpen }
      />
      <div className={ styles.desktopNavbarContainer }>
        <DesktopNavbar />
        <ImgBtn
          imgClassName={ styles.headerDownloadAppBtn }
          href="https://www.google.com.br/"
          target="_blank"
          imgSrc={ downloadAppBtn }
          imgAlt="Botão de Download"
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  isHambContentOpen: PropTypes.bool.isRequired,
  setIsHambContentOpen: PropTypes.func.isRequired,
};
