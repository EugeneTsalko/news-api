import React from 'react';
import { NewsWithId } from '@/models/types';
import getHumanDate from '@/utils/getHumanDate';
import Link from 'next/link';
import styles from './Article.module.scss';

type Props = {
  article: NewsWithId;
};

function Article({ article }: Props) {
  const { author, urlToImage, title, description, publishedAt } = article;
  const humanDate = getHumanDate(publishedAt);

  return (
    <article className={styles.article}>
      <div className={styles.article__content}>
        {urlToImage && <img src={urlToImage} alt={title} />}
        <div className={styles.article__info}>
          <h2>{article.title}</h2>
          <p className={styles.article__desription}>{description}</p>
          <p className={styles.article__author}>
            {author && author} - {humanDate}
          </p>
        </div>
        <Link className={styles.article__readMore} href={`/article?id=${article.id}`}>
          Read More
        </Link>
      </div>
    </article>
  );
}

export default Article;
