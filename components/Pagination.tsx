import React from "react";
import { usePagination, paginationStyle } from "Hook/Board";
import { PaginationOptions } from "interfaces";

// option
// color = "#000",
//   backgroundColor = "transparent",
//   activeBackground = "rgba(0, 0, 0, 0.04)",
//   activeColor = "#000",
//align = "center",
//margin: "20px 0";
//custom style

const styleInstance = paginationStyle({ customStyle: { padding: "20px" } });
const { Ul, Li } = styleInstance;

const Pagination = ({
  onPageChange,
  currentPage,
  pageSize,
  totalData,
  prev = <span>{"<"}</span>,
  next = <span>{">"}</span>,
}: PaginationOptions) => {
  const Instance = usePagination({
    totalCount: totalData, // generated from table
    pageSize: pageSize, // default 10
    currentPage: 1, // default 1
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
        <Li
          disabled={currentPage === 0}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {prev}
        </Li>
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
        <Li
          disabled={currentPage === totalPageCount}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {next}
        </Li>
      </Ul>
    </>
  );
};

export default Pagination;
