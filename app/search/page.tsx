import React from 'react';
import styles from '@/page.module.scss';
import NewsList from '@/components/NewsList/NewsList';
import getNews from '@/utils/getNews';
import { NewsResponse } from '@/models/types';

type Props = {
  searchParams: { q: string };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await getNews(searchParams.q);

  return (
    <main className={styles.main}>
      <h2>Search results for: {searchParams.q}</h2>
      <NewsList news={news.articles} />
    </main>
  );
}

export default SearchPage;
