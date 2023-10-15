'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import useDebounce from '@/utils/useDebounce';
import styles from './SearchBox.module.scss';

function SearchBox() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const debouncedInput = useDebounce(input, 1000);

  const handleSearch = useCallback(() => {
    if (debouncedInput) {
      router.push(`?q=${debouncedInput}`);
    }
  }, [debouncedInput, router]);

  useEffect(() => {
    handleSearch();
  }, [debouncedInput, handleSearch]);

  return (
    <form className={styles.searchBox}>
      <input type="text" placeholder="Search keywords..." value={input} onChange={(e) => setInput(e.target.value)} />
      <span className={!input ? styles.searchBox__disabled : ''}>
        <Image src="/Search.svg" width={24} height={24} alt="search" />
      </span>
    </form>
  );
}

export default SearchBox;
