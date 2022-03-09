import Pagination from "components/Pagination";
import Table from "components/Table";
import { useState } from "react";
import { sampleTablePropsData } from "utils/sample-data";
import { useTable } from "Hook/Board";

// type import
import { PaginationOptions } from "interfaces";

const IndexPage = () => {
  // crate a instance with usePagination
  const [currentPage, setCurrentPage] = useState<number>(1); // start with one
  let pageSize = 10;

  //on page change
  // for now this is a page controller
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const tableOption = {
    currentPage: currentPage, //defult 1
    data: sampleTablePropsData, //required
    pageSize: pageSize, //default is 10
  };

  //initilizing table hook
  const { pageData, totalData } = useTable({ ...tableOption });
  // pagination option
  const paginationOptions: PaginationOptions = {
    currentPage: currentPage, //required
    pageSize: pageSize, //required
    onPageChange: onPageChange, //required
    totalData: totalData, //required'
    prev: <span>{"<"}</span>, // default is <,
    next: <span>{">"}</span>, // default is >,
  };

  return (
    <>
      {/*
        props

      */}
      {/* for now its a only wat to connect pagination and table */}

      <Table data={pageData} />
      <Pagination {...paginationOptions} />

      <div>
        {" "}
        <pre>
          <code>
            {JSON.stringify(
              {
                pageSize,
                currentPage,
                totalData,
              },
              null,
              2
            )}
          </code>
        </pre>
      </div>
    </>
  );
};

export default IndexPage;
