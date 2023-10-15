'use client';

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './SearchBox.module.scss';

function SearchBox() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?q=${input}`);
  };

  return (
    <form className={styles.searchBox} onSubmit={handleSearch}>
      <input type="text" placeholder="Search keywords..." value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" disabled={!input}>
        <Image src="/Search.svg" width={24} height={24} alt="search" />
      </button>
    </form>
  );
}

export default SearchBox;
