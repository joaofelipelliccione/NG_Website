/* eslint-disable react/prop-types */

import React from 'react';
import Header from './header/Header';
import MobileNavBar from './header/MobileNavbar';
import MobileFooter from './footer/MobileFooter';
import DesktopFooter from './footer/DesktopFooter';
import styles from '../styles/components/Layout.module.css';

export default function Layout({ children }) {
  const [isHambContentOpen, setIsHambContentOpen] = React.useState(false);

  return (
    <div className={ styles.content }>
      <Header
        isHambContentOpen={ isHambContentOpen }
        setIsHambContentOpen={ setIsHambContentOpen }
      />
      {isHambContentOpen && (
        <MobileNavBar
          isHambContentOpen={ isHambContentOpen }
          setIsHambContentOpen={ setIsHambContentOpen }
        />)}
      { children }
      <DesktopFooter />
      <MobileFooter />
    </div>
  );
}
