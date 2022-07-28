/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import headerPaths from '../../data/headerPaths';
import styles from '../../styles/components/mobile/MobileNavbar.module.css';

export default function MobileNavBar({ isHambContentOpen, setIsHambContentOpen }) {
  const dropdownRef = React.useRef(null);
  const router = useRouter();

  React.useEffect(() => {
    const pageClickEvent = ({ target }) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(target)) {
        setIsHambContentOpen(!isHambContentOpen);
      }
    };

    if (isHambContentOpen) {
      window.addEventListener('touchend', pageClickEvent);
    }

    return () => {
      window.removeEventListener('touchend', pageClickEvent);
    };
  }, [isHambContentOpen]);

  return (
    <nav className={ styles.mobileNavbar } ref={ dropdownRef }>
      {headerPaths.map(({ name, passHrefProp, path }) => (
        <Link
          key={ name }
          href={ path }
          passHref={ passHrefProp }
        >
          <button
            onClick={ () => setIsHambContentOpen(false) }
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

MobileNavBar.propTypes = {
  isHambContentOpen: PropTypes.bool.isRequired,
  setIsHambContentOpen: PropTypes.func.isRequired,
};
