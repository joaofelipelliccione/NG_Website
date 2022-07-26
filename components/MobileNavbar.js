/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import headerPaths from '../data/headerPaths';
import styles from '../styles/components/MobileNavbar.module.css';

export default function MobileNavBar() {
  return (
    <nav className={ styles.mobileNavbar }>
      {headerPaths.map(({ name, passHrefProp, path }) => (
        <Link
          key={ name }
          href={ path }
          passHref={ passHrefProp }
        >
          <a>{name}</a>
        </Link>
      ))}
    </nav>
  );
}
