import Pagination from "components/Pagination";
import Table from "components/Table";
import { useState } from "react";
import { sampleTablePropsData } from "utils/sample-data";

const IndexPage = () => {
  // crate a instance with usePagination
  const [currentPage, setCurrentPage] = useState<number>(1); // start with one
  let pageSize = 10;

  //on page change
  // for now this is a page controller
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginationOptions = {
    currentPage: currentPage, //required
    pageSize: pageSize, //required
    onPageChange: onPageChange, //required
    data: sampleTablePropsData, //required
  };

  return (
    <>
      {/*
        props

      */}
      {/* for now its a only wat to connect pagination and table */}

      <Table
        currentPage={currentPage}
        pageSize={pageSize}
        data={sampleTablePropsData}
      />
      <Pagination {...paginationOptions} />

      <div>
        {" "}
        <pre>
          <code>
            {JSON.stringify(
              {
                pageSize,
                currentPage,
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
