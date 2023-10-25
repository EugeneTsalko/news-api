'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/page.module.scss';
import toast from 'react-hot-toast';
import { useNewsContext } from '@/context/news.context';
import NewsList from './components/NewsList/NewsList';
import Spinner from './components/Spinner/Spinner';
import getNews from './utils/getNews';
import HomeSelectors from './components/HomeSelectors/HomeSelectors';
import { Selects } from './models/types';

type Props = {
  searchParams: { q: string };
};

function Home({ searchParams }: Props) {
  const { news, loading, setNews, setLoading } = useNewsContext();

  const [selects, setSelects] = useState<Selects>({});

  useEffect(() => {
    (async () => {
      try {
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
      } finally {
        setLoading(false);
      }
    })();
  }, [searchParams, setLoading, setNews, selects]);

  return (
    <main className={styles.main}>
      <HomeSelectors selects={selects} setSelects={setSelects} />

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
