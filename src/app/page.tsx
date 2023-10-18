'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/page.module.scss';
import toast from 'react-hot-toast';
import NewsList from './components/NewsList/NewsList';
import getNews from './utils/getNews';
import { NewsWithId } from './models/types';

type Props = {
  searchParams: { q: string };
};

function Home({ searchParams }: Props) {
  const [news, setNews] = useState<NewsWithId[]>([]);

  useEffect(() => {
    (async () => {
      if (!searchParams.q) return;

      const response = await getNews(searchParams.q);

      if (response.status === 'error') {
        toast.error(response.message, { id: 'error' });
      }

      setNews(response.data);
    })();
  }, [searchParams.q]);

  return (
    <main className={styles.main}>
      {news.length ? (
        <>
          <h2>Search results for: {searchParams.q}</h2>
          <NewsList news={news} />
        </>
      ) : (
        <h2>Hello. Please, use the search to read news.</h2>
      )}
    </main>
  );
}

export default Home;
