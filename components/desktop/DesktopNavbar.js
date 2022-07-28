import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import headerPaths from '../../data/headerPaths';
import styles from '../../styles/components/desktop/DesktopNavbar.module.css';

export default function DesktopNavbar() {
  const router = useRouter();

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
            className={ router.pathname === path ? styles.selectedLink : styles.link }
          >
            {name}
          </button>
        </Link>
      ))}
    </nav>
  );
}
