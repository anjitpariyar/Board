import React, { useEffect, useMemo } from "react";

const Table = ({ currentPage, pageSize, data }) => {
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>title</th>
          <th>writer</th>
          <th>viewcount</th>
        </tr>
      </thead>
      <tbody>
        {currentTableData.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.writer}</td>
              <td>{item.viewcount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
