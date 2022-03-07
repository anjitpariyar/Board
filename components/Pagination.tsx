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
  data: any[];
}

const styleInstance = paginationStyle({});

// warning comming from this
const { Ul, Li } = styleInstance;

const Pagination = ({ onPageChange, currentPage, data, pageSize }: Props) => {
  const Instance = usePagination({
    totalCount: data.length, //required
    pageSize: pageSize, // default 10
    currentPage: 0, // default 0
  });

  const { totalPageCount } = Instance;

  //options
  // color = "#000",
  // backgroundColor = "transparent",
  // activeBackground = "rgba(0, 0, 0, 0.04)",
  // activeColor = "#000",

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

const UUl = styled(Ul)``;
