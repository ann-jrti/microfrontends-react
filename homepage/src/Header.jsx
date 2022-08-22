import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <ul className={styles.navList}>
        <li>
          <NavLink className={styles.navLink} to='/vue'>Vue/JS</NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to='/react'>React/TS</NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to='/'>Home</NavLink>
        </li>
      </ul>
    </div>
  );
};
