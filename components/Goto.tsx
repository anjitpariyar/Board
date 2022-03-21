import React, { useState, useEffect } from "react";

const Goto = ({ data, onPageChange, pageSize }) => {
  const totalPageCount: number = parseInt(data.length, 10) / pageSize;
  console.log(typeof totalPageCount);
  const [page, setPage] = useState<number | string>("");
  const onChange = ({ target: { value } }) => {
    if (value) setPage(parseInt(value, 10));
  };

  useEffect(() => {
    if (page && page <= totalPageCount) {
      onPageChange(page);
    }
  }, [page]);

  return (
    <div>
      <label htmlFor="goto">Goto</label>
      <input
        id="goto"
        type="number"
        placeholder={"from 1 to " + totalPageCount}
        min="1"
        max={totalPageCount}
        value={page}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
};

export default Goto;
