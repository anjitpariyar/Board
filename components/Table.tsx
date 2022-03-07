import React from "react";
import { sampleTablePropsData } from "utils/sample-data";

const Table = () => {
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
        {sampleTablePropsData.map((item) => {
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
