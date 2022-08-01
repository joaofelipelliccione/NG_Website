import React from 'react';
import styles from '../../styles/components/footer/Footer.module.css';

export default function FooterContact() {
  return (
    <div className={ styles.footerContact }>
      <h3>Contato</h3>
      <div className={ styles.footerContactMails }>
        <a
          href="mailto:suporte@ng.cash"
          target="_blank"
          rel="noreferrer"
        >
          suporte@ng.cash
        </a>
      </div>
      <div className={ styles.footerContactAddress }>
        <h4>NG.CASH</h4>
        <p>Rua Marquês de São Vicente, 225 -</p>
        <p>Gávea Rio de Janeiro - RJ Brasil -</p>
        <p>CEP  22451-900</p>
      </div>
    </div>
  );
}
