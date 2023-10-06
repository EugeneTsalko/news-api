import React from 'react';
import { News } from '@/models/types';
import styles from './Article.module.scss';

type Props = {
  article: News;
};

function Article({ article }: Props) {
  const { author, urlToImage, title, description, publishedAt } = article;
  return (
    <article className={styles.article}>
      {urlToImage && <img src={urlToImage} alt={title} width={250} height={250} />}
      <div>
        <div>
          <h2>{article.title}</h2>
          <section>
            <p>{description}</p>
          </section>
          <footer>
            <p>{author && author} - </p>
            <p>{publishedAt}</p>
          </footer>
        </div>
      </div>
    </article>
  );
}

export default Article;
