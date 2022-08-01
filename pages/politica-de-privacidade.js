import React from 'react';
import styles from '../styles/pages/privacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <main className={ styles.privacyPolicyPage }>
      <iframe
        title="Política de Privacidade"
        src="/documents/privacy_policy.pdf#view=fitH"
        type="application/pdf"
      />
    </main>
  );
}
