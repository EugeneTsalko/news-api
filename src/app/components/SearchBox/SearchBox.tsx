'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import useDebounce from '@/hooks/useDebounce';
import { useNewsContext } from '@/context/news.context';
import styles from './SearchBox.module.scss';

function SearchBox() {
  const [input, setInput] = useState('');
  const { loading } = useNewsContext();
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
    <form
      className={styles.searchBox}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
      />
      <span>
        <Image src="/Search.svg" width={24} height={24} alt="search" />
      </span>
    </form>
  );
}

export default SearchBox;
