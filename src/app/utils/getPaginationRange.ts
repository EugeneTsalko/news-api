import range from './getRange';

const getPaginationRange = (totalPageNumber: number, currentPage: number) => {
  if (totalPageNumber <= 6) {
    return range(1, totalPageNumber + 1);
  }

  const leftSiblingsIndex = Math.max(currentPage - 1, 1);
  const rightSiblingsIndex = Math.min(currentPage + 1, totalPageNumber);

  const showLeftDots = leftSiblingsIndex > 3;
  const showRightDots = rightSiblingsIndex < totalPageNumber - 2;

  if (!showLeftDots && showRightDots) {
    const leftItemsCount = Math.max(3, currentPage + 1);
    const leftRange = range(1, leftItemsCount + 1);

    return [...leftRange, '...', totalPageNumber];
  }

  if (showLeftDots && !showRightDots) {
    const rightItemsCount = Math.max(3, totalPageNumber - currentPage + 2);
    const rightRange = range(totalPageNumber - rightItemsCount + 1, totalPageNumber + 1);

    return [1, '...', ...rightRange];
  }

  const middleRange = range(leftSiblingsIndex, rightSiblingsIndex + 1);
  return [1, '...', ...middleRange, '...', totalPageNumber];
};

export default getPaginationRange;
