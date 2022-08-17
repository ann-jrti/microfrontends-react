import React from 'react';
import styles from './Header.module.scss';
export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <p>
        This is a <span className={styles.titleSpan}>header</span> component
        example
      </p>
    </div>
  );
};
