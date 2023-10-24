'use client';

import React, { ChangeEvent } from 'react';
import { useParametersContext } from '@/context/parameters.context';
import styles from './Parameters.module.scss';

function Parameters() {
  const { selects, setSelects } = useParametersContext();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelects({ ...selects, [name]: value });
  };

  return (
    <form className={styles.parameters}>
      <label htmlFor="sortBy">
        Sort by:
        <select name="sortBy" onChange={handleChange} defaultValue="">
          <option hidden disabled value="">
            select option
          </option>
          <option value="publishedAt">Recent first</option>
          <option value="popularity">Popularity</option>
        </select>
      </label>
      <label htmlFor="pageSize">
        Page size:
        <select name="pageSize" onChange={handleChange} defaultValue="">
          <option hidden disabled value="">
            select option
          </option>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
      </label>
      <label htmlFor="language">
        Language:
        <select name="language" onChange={handleChange} defaultValue="">
          <option hidden disabled value="">
            select option
          </option>
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="fr">FR</option>
          <option value="de">DE</option>
        </select>
      </label>
    </form>
  );
}

export default Parameters;
