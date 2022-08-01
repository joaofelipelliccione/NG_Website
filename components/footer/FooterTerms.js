import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/footer/Footer.module.css';

export default function FooterTerms() {
  return (
    <div className={ styles.footerTerms }>
      <a
        href="/documents/ng_terms-of-use.pdf"
        alt="Termos de Uso"
        target="_blank"
        rel="noopener noreferrer"
      >
        Termos de Uso
      </a>
      <Link
        href="/politica-de-privacidade"
        passHref={ false }
      >
        Política de Privacidade
      </Link>
    </div>
  );
}
