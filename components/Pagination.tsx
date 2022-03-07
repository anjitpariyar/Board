import React from "react";
import styled from "styled-components";
import { usePagination, paginationStyle } from "Hook/Board";

interface Props {
  onPageChange?: any;
  totalCount?: any;
  siblingCount?: any;
  currentPage?: any;
  pageSize?: any;
  style?: any;
}

const Pagination = ({ onPageChange, style, currentPage, pageSize }: Props) => {
  const Instance = usePagination({
    totalCount: 100, //required
    pageSize: 10, // default 10
    currentPage: 0, // default 0
  });

  const { totalPageCount } = Instance;

  //options
  // color = "#000",
  // backgroundColor = "transparent",
  // activeBackground = "rgba(0, 0, 0, 0.04)",
  // activeColor = "#000",
  const styleInstance = paginationStyle({});
  const { Ul, Li } = styleInstance;

  return (
    <>
      <Ul>
        {[...Array(totalPageCount)].map((count, index) => {
          return (
            <Li
              key={index}
              active={index === currentPage - 1}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </Li>
          );
        })}
      </Ul>
    </>
  );
};

export default Pagination;
