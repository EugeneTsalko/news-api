'use client';

import React from 'react';
import { useNewsContext } from '@/context/news.context';
import getHumanDate from '@/utils/getHumanDate';
import styles from './ArticlePage.module.scss';

type Props = {
  searchParams: { id: string };
};

function ArticlePage({ searchParams }: Props) {
  const { news } = useNewsContext();
  let article = news.find((el) => el.id === searchParams.id)!;

  if (article) {
    localStorage.setItem('article', JSON.stringify(article));
  } else {
    article = JSON.parse(localStorage.getItem('article')!);
  }

  const humanDate = getHumanDate(article.publishedAt);

  return (
    <article className={styles.articlePage}>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} className={styles.articlePage__image} />}
      <h2>{article.title}</h2>
      <div className={styles.articlePage__info}>
        {article.author && <p>By: {article.author}</p>}
        {article.source.name && <p>Source: {article.source.name}</p>}
        <p>Date: {humanDate}</p>
      </div>
      <p className={styles.articlePage__content}>{article.content}</p>
    </article>
  );
}

export default ArticlePage;
