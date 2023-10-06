import React from 'react';
import { News } from '@/models/types';
import styles from './NewsList.module.scss';
import Article from '../Article/Article';

type Props = {
  news: News[];
};

function NewsList({ news }: Props) {
  return (
    <div className={styles.newsList}>
      {news.map((article) => (
        <Article article={article} key={article.url} />
      ))}
    </div>
  );
}

export default NewsList;
