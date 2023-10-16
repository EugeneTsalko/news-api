import React from 'react';
import { NewsWithId } from '@/models/types';
import { useRouter } from 'next/navigation';
import styles from './ReadMoreButton.module.scss';

type Props = {
  article: NewsWithId;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/article?id=${article.id}`);
  };

  return (
    <button className={styles.readMoreButton} onClick={handleClick} type="button">
      Read More
    </button>
  );
}

export default ReadMoreButton;
