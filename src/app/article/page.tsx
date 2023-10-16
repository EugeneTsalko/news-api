'use client';

import React from 'react';
import { useNewsContext } from '@/context';
import { NewsWithId } from '@/models/types';
import getHumanDate from '@/utils/getHumanDate';
import styles from './ArticlePage.module.scss';

type Props = {
  searchParams: { id: string };
};

function ArticlePage({ searchParams }: Props) {
  const { context } = useNewsContext();
  const article = context?.find((el) => el.id === searchParams.id) as NewsWithId;
  const humanDate = getHumanDate(article.publishedAt);

  return (
    <article className={styles.articlePage}>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} className={styles.articlePage__image} />}
      <h2>{article.title}</h2>
      <div className={styles.articlePage__info}>
        {article.author && <span>By: {article.author}</span>}
        {article.source.name && <span>Source: {article.source.name}</span>}
        <span>Date: {humanDate}</span>
      </div>
      <p className={styles.articlePage__content}>{article.content}</p>
    </article>
  );
}

export default ArticlePage;
