'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/page.module.scss';
import toast from 'react-hot-toast';
import NewsList from './components/NewsList/NewsList';
import Spinner from './components/Spinner/Spinner';
import getNews from './utils/getNews';
import { useNewsContext } from './context';
import { NewsWithId } from './models/types';

type Props = {
  searchParams: { q: string };
};

function Home({ searchParams }: Props) {
  const [news, setNews] = useState<NewsWithId[] | null>(null);
  const [loading, setLoading] = useState(false);
  const { setContext } = useNewsContext();

  useEffect(() => {
    (async () => {
      setLoading(true);

      if (searchParams.q) {
        const response = await getNews(searchParams.q);

        if (response.status === 'error') {
          toast.error(response.message, { id: 'error' });
        }

        setNews(response.data);
      }

      setLoading(false);
    })();
  }, [searchParams.q]);

  useEffect(() => {
    setContext(news as NewsWithId[]);
  }, [news, setContext]);

  return (
    <main className={styles.main}>
      {loading ? (
        <Spinner />
      ) : (
        news && (
          <>
            <h2>Search results for: {searchParams.q}</h2>
            <NewsList news={news} />
          </>
        )
      )}
    </main>
  );
}

export default Home;
