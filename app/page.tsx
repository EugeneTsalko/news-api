import React from 'react';
import styles from '@/page.module.scss';
import getNews from './utils/getNews';
import { NewsResponse } from './models/types';
import NewsList from './components/NewsList/NewsList';

async function Home() {
  const news: NewsResponse = await getNews('test');

  return (
    <main className={styles.main}>
      <NewsList news={news.articles} />
    </main>
  );
}

export default Home;
