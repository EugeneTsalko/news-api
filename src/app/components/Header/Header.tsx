import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import SearchBox from '../SearchBox/SearchBox';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>NEWS</h1>
      </Link>
      <ThemeToggle />
      <SearchBox />
    </header>
  );
}

export default Header;
