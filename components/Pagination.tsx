import React from "react";
import { usePagination, paginationStyle } from "Hook/Board";

interface Props {
  onPageChange?: any;
  totalCount?: any;
  siblingCount?: any;
  currentPage?: any;
  pageSize?: any;
  style?: any;
  totalData: number;
}

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
}: Props) => {
  const Instance = usePagination({
    totalCount: totalData, // generated from table
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
        <li>{"<"}</li>
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
        <li>{">"}</li>
      </Ul>
    </>
  );
};

export default Pagination;
