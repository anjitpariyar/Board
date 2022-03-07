import { useMemo } from "react";

/**
 *
 * @param totalCount required, pageSize is total number of row in one page default is 10, currentPage default 0
 * @returns
 */
export const usePagination = ({
  totalCount,
  pageSize = 10,
  currentPage = 0,
}) => {
  const paginationRange = useMemo(() => {
    // Our implementation logic will go here
    const totalPageCount = Math.ceil(totalCount / pageSize);
    return { pageSize, currentPage, totalPageCount };
  }, [totalCount, pageSize, currentPage]);

  return paginationRange;
};

export const paginationController = ({ page }) => {
  const pageChange = useMemo(() => {
    // Our implementation logic will go here
    const newPage = page;
    return { newPage };
  }, [page]);
};
