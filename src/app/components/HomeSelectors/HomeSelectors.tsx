'use client';

import React, { ChangeEvent } from 'react';
import { Selects } from '@/models/types';
import styles from './HomeSelectors.module.scss';
import Select from '../Select/Select';

type Props = {
  selects: Selects;
  setSelects(selects: Selects): void;
};

function HomeSelectors({ selects, setSelects }: Props) {
  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLSelectElement>) => {
    setSelects({ ...selects, [name]: value });
  };

  return (
    <form className={styles.homeSelectors}>
      <Select
        name="sortBy"
        label="Sort by:"
        defaultValue="relevancy"
        options={['publishedAt', 'popularity', 'relevancy']}
        onChange={handleChange}
      />
      <Select
        name="pageSize"
        label="Page size:"
        defaultValue="100"
        options={['3', '6', '9', '27', '100']}
        onChange={handleChange}
      />
      <Select
        name="language"
        label="Language:"
        defaultValue="en"
        options={['en', 'fr', 'ru', 'de']}
        onChange={handleChange}
      />
    </form>
  );
}

export default HomeSelectors;
