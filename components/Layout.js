/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import MobileNavBar from './MobileNavbar';
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
    </div>
  );
}
