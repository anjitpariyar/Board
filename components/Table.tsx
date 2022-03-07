import React, { useEffect, useMemo } from "react";

const Table = ({ data }) => {
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
        {data.map((item) => {
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
