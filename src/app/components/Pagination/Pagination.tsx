import { useNewsContext } from '@/context/news.context';
import React from 'react';
import { Selects } from '@/models/types';
import classNames from 'classnames/bind';
import getPaginationRange from '@/utils/getPaginationRange';
import styles from './Pagination.module.scss';

type Props = {
  currentPage: number;
  setCurrentPage(value: number): void;
  selects: Selects;
  setSelects(selects: Selects): void;
};

const cx = classNames.bind(styles);

function Pagination({ currentPage, setCurrentPage, selects, setSelects }: Props) {
  const { news } = useNewsContext();
  const totalPageNumber = Math.floor(100 / news.length); // 100 articles - API limit

  const paginationElements = getPaginationRange(totalPageNumber, currentPage);

  const handlePageChange = (value: number) => {
    if ((value < currentPage && currentPage > 1) || (value > currentPage && currentPage < totalPageNumber)) {
      setCurrentPage(value);
      setSelects({ ...selects, page: value.toString() });
    }
  };

  return (
    <ul className={styles.pagination}>
      <li className={styles.pagination__item}>
        <button type="button" className={styles.pageLink} onClick={() => handlePageChange(currentPage - 1)}>
          &lsaquo; Previous
        </button>
      </li>

      {paginationElements.map((value, i) =>
        typeof value === 'number' ? (
          <li key={i} className={cx({ pagination__item: true, 'pagination__item--active': value === currentPage })}>
            <button type="button" onClick={() => handlePageChange(value)}>
              {value}
            </button>
          </li>
        ) : (
          <li key={i} className={styles.pagination__item}>
            <span className={styles.pageLink}>{value}</span>
          </li>
        ),
      )}

      <li className={styles.pagination__item}>
        <button type="button" className={styles.pageLink} onClick={() => handlePageChange(currentPage + 1)}>
          Next &rsaquo;
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
