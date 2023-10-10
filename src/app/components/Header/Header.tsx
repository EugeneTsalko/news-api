import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import SearchBox from '../SearchBox/SearchBox';

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>NEWS</h1>
      </Link>
      <SearchBox />
    </header>
  );
}

export default Header;
