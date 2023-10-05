import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>NEWS</h1>
      </Link>
    </header>
  );
}

export default Header;
