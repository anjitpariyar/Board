import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import Link from "next/link";

const Table = ({ data, searchValue }) => {
  return (
    <TableWrapper>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>title</Th>
          <Th>writer</Th>
          <Th>viewcount</Th>
        </Tr>
      </Thead>
      <tbody>
        {data.map((item) => {
          return (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>
                <Link href={"/product/" + item.id}>
                  <a>{item.title}</a>
                </Link>
              </Td>
              <Td>{item.writer}</Td>
              <Td>{item.viewcount}</Td>
            </Tr>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

export default Table;

const TableWrapper = styled.table`
  width: 100%;
  text-align: left;
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr`
  &:hover {
    td {
      background-color: #f3f3f3;
    }
  }
`;
export const Td = styled.td`
  margin: 0;
  padding: 13px 14px;
  border-bottom: 1px solid #eee;
`;
export const Th = styled(Td).attrs({
  as: "th",
})`
  border-block: 2px solid #29367c;
  border-bottom-width: 1px;
`;
