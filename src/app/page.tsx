'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/page.module.scss';
import NewsList from './components/NewsList/NewsList';
import getNews from './utils/getNews';
import { NewsResponse } from './models/types';

type Props = {
  searchParams: { q: string };
};

function Home({ searchParams }: Props) {
  const [news, setNews] = useState<NewsResponse | null>(null);

  useEffect(() => {
    (async () => {
      if (searchParams.q) {
        setNews(await getNews(searchParams.q));
      }
    })();
  }, [searchParams.q]);

  return (
    <main className={styles.main}>
      {news ? (
        <>
          <h2>Search results for: {searchParams.q}</h2>
          <NewsList news={news.articles} />
        </>
      ) : (
        <h2>Hello. Please, use the search to read news.</h2>
      )}
    </main>
  );
}

export default Home;
