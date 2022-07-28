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
            style={ {
              borderBottom: router.pathname === path ? 'solid 1px #7D2CFF' : 'none',
              color: router.pathname === path ? '#7D2CFF' : '#FFFFFF',
              transitionDuration: '0.8s',
            } }
          >
            {name}
          </button>
        </Link>
      ))}
    </nav>
  );
}
