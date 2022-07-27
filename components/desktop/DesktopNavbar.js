import React from 'react';
import Link from 'next/link';
import headerPaths from '../../data/headerPaths';
import styles from '../../styles/components/desktop/DesktopNavbar.module.css';

export default function DesktopNavbar() {
  return (
    <nav className={ styles.desktopNavbar }>
      {headerPaths.map(({ name, passHrefProp, path }) => (
        <Link
          key={ name }
          href={ path }
          passHref={ passHrefProp }
        >
          <button
            type="button"
          >
            {name}
          </button>
        </Link>
      ))}
    </nav>
  );
}
