'use client';

import React from 'react';
import { useNewsContext } from '@/context/news.context';
import { redirect } from 'next/navigation';
import getHumanDate from '@/utils/getHumanDate';
import styles from './ArticlePage.module.scss';

type Props = {
  params: { articleId: string };
};

function ArticlePage({ params: { articleId } }: Props) {
  const { news } = useNewsContext();
  const article = news.find((el) => el.id === articleId);

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
