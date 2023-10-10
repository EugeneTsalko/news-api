import React from 'react';
import { News } from '@/models/types';
import Link from 'next/link';
import styles from './Article.module.scss';

type Props = {
  article: News;
};

function Article({ article }: Props) {
  const { author, urlToImage, title, description, publishedAt, url } = article;

  return (
    <article className={styles.article}>
      {urlToImage && <img src={urlToImage} alt={title} />}
      <div className={styles.article__info}>
        <h2 className={styles.articleTitle}>{article.title}</h2>
        <p className={styles.article__desription}>{description}</p>
        <p className={styles.article__author}>
          {author && author} - <span>{new Date(publishedAt).toLocaleString()}</span>
        </p>
      </div>
      <Link href={url} target="_blank" className={styles.article__readMore}>
        READ MORE
      </Link>
    </article>
  );
}

export default Article;
