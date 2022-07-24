import React from 'react';
import Image from 'next/image';
import ngLogo from '../assets/logo_ng_cash.gif';
import styles from '../styles/components/Header.module.css';

export default function Header() {
  return (
    <header className={ styles.mobileHeader }>
      <Image
        src={ ngLogo }
        alt="Logo NG.CASH"
        className="ngLogo"
      />
      <span>Botão</span>
    </header>
  );
}
