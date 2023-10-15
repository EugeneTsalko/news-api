import React from 'react';
import Link from 'next/link';
import { News } from '@/models/types';
import styles from './Article.module.scss';

type Props = {
  article: News;
};

function Article({ article }: Props) {
  const { author, urlToImage, title, description, publishedAt, url } = article;
  const humanDate = new Date(publishedAt).toLocaleString();

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
        <Link href={url} target="_blank" className={styles.article__readMore}>
          READ MORE
        </Link>
      </div>
    </article>
  );
}

export default Article;
