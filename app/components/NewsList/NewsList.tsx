import React from 'react';
import { News } from '@/models/types';
import styles from './NewsList.module.scss';

type Props = {
  news: News[];
};

function NewsList({ news }: Props) {
  return <section className={styles.newsList}>{`${news}`}</section>;
}

export default NewsList;
