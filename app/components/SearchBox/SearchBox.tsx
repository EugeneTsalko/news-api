'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SearchBox.module.scss';

function SearchBox() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${input}`);
  };

  return (
    <form className={styles.searchBox} onSubmit={handleSearch}>
      <input type="text" placeholder="Search keywords..." value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" disabled={!input}>
        Search
      </button>
    </form>
  );
}

export default SearchBox;
