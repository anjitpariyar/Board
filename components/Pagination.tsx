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
const { Ul, Li, Button } = styleInstance;

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

  const PrevFunc = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  };
  const NextFunc = () => {
    if (currentPage !== totalPageCount) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <>
      <Ul>
        <Button
          disabled={currentPage === 1}
          onClick={() => PrevFunc()}
          key="-1"
        >
          {prev}
        </Button>
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
        <Button
          disabled={currentPage === totalPageCount}
          onClick={() => NextFunc()}
          key={totalPageCount + 10}
        >
          {next}
        </Button>
      </Ul>
    </>
  );
};

export default Pagination;
