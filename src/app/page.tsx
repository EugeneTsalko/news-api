'use client';

import React, { useEffect } from 'react';
import styles from '@/page.module.scss';
import toast from 'react-hot-toast';
import { useNewsContext } from '@/context/news.context';
import NewsList from './components/NewsList/NewsList';
import Spinner from './components/Spinner/Spinner';
import getNews from './utils/getNews';
import { useLoadingContext } from './context/loading.context';

type Props = {
  searchParams: { q: string };
};

function Home({ searchParams }: Props) {
  const { loading, setLoading } = useLoadingContext();
  const { news, setNews } = useNewsContext();

  useEffect(() => {
    (async () => {
      setLoading(true);

      if (!searchParams.q) {
        setLoading(false);
        return;
      }

      const response = await getNews(searchParams.q);

      if (response.status === 'error') {
        toast.error(response.message, { id: 'error' });
      }

      setNews(response.data);

      setLoading(false);
    })();
  }, [searchParams, setLoading, setNews]);

  return (
    <main className={styles.main}>
      {loading ? (
        <Spinner />
      ) : (
        !!news.length && (
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
