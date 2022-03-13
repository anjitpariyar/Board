import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

// for now get a value and paint the result
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const onChange = ({ target: { value } }) => {
    setSearchText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`/?keyword=${searchText}`, undefined, { shallow: true });
    setSearchText("");
  };

  return (
    <div style={{ margin: "2em 0" }}>
      <form onSubmit={onSubmit}>
        <label htmlFor="searchTable">Search</label>
        <SearchWrapper>
          <input
            id="searchTable"
            type="text"
            placeholder={"Search "}
            value={searchText}
            onChange={(event) => onChange(event)}
          />
          <button type="submit">Search</button>
        </SearchWrapper>
      </form>
    </div>
  );
};

export default Search;

const SearchWrapper = styled.div`
  display: flex;
`;
