import React from 'react';
import styles from './Content.module.scss';

export const Content = ({ contentMessage }) => {
  return (
    <div className={styles.contentContainer}>
      <p>{contentMessage}</p>
    </div>
  );
};
