import React from 'react';
import { NewsWithId } from '@/models/types';
import styles from './NewsList.module.scss';
import Article from '../Article/Article';

type Props = {
  news: NewsWithId[];
};

function NewsList({ news }: Props) {
  return news.length ? (
    <div className={styles.newsList}>
      {news.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </div>
  ) : (
    <h2>Nothing was found...</h2>
  );
}

export default NewsList;
