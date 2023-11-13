import React from 'react';
import classNames from 'classnames/bind';
import getPaginationRange from '@/utils/getPaginationRange';
import styles from './Pagination.module.scss';

type Props = {
  totalPageNumber: number;
  currentPage: number;
  handlePageChange(value: number): void;
};

const cx = classNames.bind(styles);

function Pagination({ currentPage, totalPageNumber, handlePageChange }: Props) {
  const isPreviousBtnDisabled = currentPage === 1;
  const isNextBtnDisabled = currentPage === totalPageNumber;

  const paginationElements = getPaginationRange(totalPageNumber, currentPage);

  return (
    <ul className={styles.pagination}>
      <li className={styles.pagination__item}>
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isPreviousBtnDisabled}
          className={cx({
            pagination__btn: true,
            pagination__prevBtn: true,
          })}
        >
          <p>Previous</p>
        </button>
      </li>

      {paginationElements.map((value, i) =>
        typeof value === 'number' ? (
          <li key={i} className={cx({ pagination__item: true, 'pagination__item--active': value === currentPage })}>
            <button type="button" onClick={() => handlePageChange(value)} className={styles.pagination__btn}>
              {value}
            </button>
          </li>
        ) : (
          <li key={i} className={styles.pagination__item}>
            <span>{value}</span>
          </li>
        ),
      )}

      <li className={styles.pagination__item}>
        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isNextBtnDisabled}
          className={cx({
            pagination__btn: true,
            pagination__nextBtn: true,
          })}
        >
          <p>Next</p>
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
