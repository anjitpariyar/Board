import { useMemo } from "react";
import styled from "styled-components";
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

export const paginationStyle = ({
  color = "#000",
  backgroundColor = "transparent",
  activeBackground = "rgba(0, 0, 0, 0.04)",
  activeColor = "#000",
}) => {
  const Ul = styled.ul`
    display: flex;
    list-style-type: none;
  `;

  const Li = styled.li<{ active?: boolean }>`
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: ${({ active }) => (active ? activeColor : color)};
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
    background-color: ${({ active }) =>
      active ? activeBackground : backgroundColor};
    cursor: pointer;
    &:hover {
      background-color: ${activeBackground};
    }
  `;

  return { Ul, Li };
};
