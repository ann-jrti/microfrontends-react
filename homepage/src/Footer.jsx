import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>
        This is a <span className={styles.footerTitle}>footer</span> component
        example
      </p>
    </div>
  );
};
