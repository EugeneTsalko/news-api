import React from 'react';
import styles from '@/page.module.scss';
import getNews from './utils/getNews';

async function Home() {
  const news = await getNews('test');
  console.log(news);

  return <main className={styles.main}>{`${news}`}</main>;
}

export default Home;
