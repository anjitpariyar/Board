import React, { useState, useEffect } from "react";

// for now get a value and paint the result
const Search = ({ onSearch }) => {
  const [searchText, setsearchText] = useState("");
  const onChange = ({ target: { value } }) => {
    setsearchText(value);
  };

  useEffect(() => {
    if (searchText) {
      onSearch(searchText);
      // onsearchTextChange(parseInt(searchText));
    }
  }, [searchText]);
  return (
    <div style={{ margin: "2em 0" }}>
      <label htmlFor="searchTable">Search</label>
      <input
        id="searchTable"
        type="text"
        placeholder={"Search "}
        value={searchText}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
};

export default Search;
