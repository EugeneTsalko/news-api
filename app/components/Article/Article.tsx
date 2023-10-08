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
      <div className={styles.info}>
        <h2>{article.title}</h2>
        <p className={styles.articleDescr}>{description}</p>
        <p className={styles.articleAuthor}>
          {author && author} - <span>{new Date(publishedAt).toLocaleString()}</span>
        </p>
      </div>
      <Link href={url} target="_blank" className={styles.readMore}>
        <span>READ MORE</span>
      </Link>
    </article>
  );
}

export default Article;
