import React from 'react';
import styles from '@/page.module.scss';
import getNews from './utils/getNews';
import { NewsResponse } from './models/types';

async function Home() {
  const news: NewsResponse = await getNews('test');

  return <main className={styles.main}>{`${JSON.stringify(news.articles[0])}`}</main>;
}

export default Home;
