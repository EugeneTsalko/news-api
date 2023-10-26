'use client';

import React from 'react';
import { useNewsContext } from '@/context/news.context';
import getHumanDate from '@/utils/getHumanDate';
import { redirect } from 'next/navigation';
import styles from './ArticlePage.module.scss';

type Props = {
  searchParams: { id: string };
};

function ArticlePage({ searchParams }: Props) {
  const { news } = useNewsContext();
  const article = news.find((el) => el.id === searchParams.id);

  if (!article) {
    redirect('/');
  }

  const humanDate = getHumanDate(article.publishedAt);

  return (
    <article className={styles.articlePage}>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} className={styles.articlePage__image} />}
      <h2>{article.title}</h2>
      <p className={styles.articlePage__info}>
        {article.author && <span>By: {article.author}</span>}
        {article.source.name && <span>Source: {article.source.name}</span>}
        <span>Date: {humanDate}</span>
      </p>
      <p className={styles.articlePage__content}>{article.content}</p>
    </article>
  );
}

export default ArticlePage;
