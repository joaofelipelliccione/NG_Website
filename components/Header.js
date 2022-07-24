import React from 'react';
import Image from 'next/image';
import ngLogo from '../assets/logo_ng_cash.gif';
import HeaderHamburger from './HeaderHamburger';
import styles from '../styles/components/Header.module.css';

const ngLogoStyle = {
  animationDuration: '1s',
  animationTimingFunction: 'ease-out',
  animationDelay: '0s',
  animationIterationCount: 1,
  animationName: 'slideInFromLeft',
};

export default function Header() {
  const [isHambContentOpen, setIsHambContentOpen] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className={ styles.header }>
      <Image
        className={ styles.ngLogo }
        src={ ngLogo }
        alt="Logo NG.CASH"
        width="95px"
        height="95px"
        style={ ngLogoStyle }
      />
      <HeaderHamburger
        isHambContentOpen={ isHambContentOpen }
        setIsHambContentOpen={ setIsHambContentOpen }
      />
    </header>
  );
}
