'use client';

import React, { useEffect } from 'react';
import styles from '@/page.module.scss';
import toast from 'react-hot-toast';
import { useNewsContext } from '@/context/news.context';
import NewsList from './components/NewsList/NewsList';
import Spinner from './components/Spinner/Spinner';
import getNews from './utils/getNews';
import { useLoadingContext } from './context/loading.context';
import { useParametersContext } from './context/parameters.context';
import Parameters from './components/Parameters/Parameters';

type Props = {
  searchParams: { q: string };
};

function Home({ searchParams }: Props) {
  const { state, setState } = useNewsContext();
  const { selects } = useParametersContext();

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });

      if (!searchParams.q) {
        setState({ ...state, loading: false });
        return;
      }

      const response = await getNews(searchParams.q, selects);

      if (response.status === 'error') {
        toast.error(response.message, { id: 'error' });
      }

      setState({ loading: false, news: response.data });
    })();
  }, [searchParams, setState, selects]);

  return (
    <main className={styles.main}>
      <Parameters />

      {state.loading ? (
        <Spinner />
      ) : (
        !!state.news.length && (
          <>
            <h2>Search results for: {searchParams.q}</h2>
            <NewsList news={state.news} />
          </>
        )
      )}
    </main>
  );
}

export default Home;
