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
        defaultValue=""
        options={['publishedAt', 'popularity']}
        onChange={handleChange}
      />
      <Select name="pageSize" label="Page size:" defaultValue="" options={['3', '6', '9']} onChange={handleChange} />
      <Select
        name="language"
        label="Language:"
        defaultValue=""
        options={['en', 'fr', 'ru', 'de']}
        onChange={handleChange}
      />
    </form>
  );
}

export default HomeSelectors;
