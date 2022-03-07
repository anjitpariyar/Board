import React from "react";
import { usePagination } from "Hook/Board";
import styled from "styled-components";

interface Props {
  onPageChange?: any;
  totalCount?: any;
  siblingCount?: any;
  currentPage?: any;
  pageSize?: any;
  style?: any;
}

const Pagination = ({ onPageChange, style }: Props) => {
  const Instance = usePagination({
    totalCount: 100, //required
    pageSize: 10, // default 10
    currentPage: 0, // default 0
  });

  const { totalPageCount, pageSize, currentPage } = Instance;

  return (
    <>
      <div>
        {" "}
        <pre>
          <code>
            {JSON.stringify(
              {
                pageSize,
                currentPage,
                totalPageCount,
              },
              null,
              2
            )}
          </code>
        </pre>
      </div>
      <Ul>
        {[...Array(totalPageCount)].map((count, index) => {
          return (
            <Li
              key={index}
              active={index === currentPage}
              onClick={() => onPageChange(index)}
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

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;
const Li = styled.li<{ active?: boolean }>`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  background-color: ${({ active }) => active && "rgba(0, 0, 0, 0.04)"};
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
