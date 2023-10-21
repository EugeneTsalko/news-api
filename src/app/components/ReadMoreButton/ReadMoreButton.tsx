import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './ReadMoreButton.module.scss';

type Props = {
  articleId: string;
};

function ReadMoreButton({ articleId }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/article?id=${articleId}`);
  };

  return (
    <button className={styles.readMoreButton} onClick={handleClick} type="button">
      Read More
    </button>
  );
}

export default ReadMoreButton;
