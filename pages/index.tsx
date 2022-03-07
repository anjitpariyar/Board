import Pagination from "components/Pagination";
import Table from "components/Table";
import { useState } from "react";

const IndexPage = () => {
  // crate a instance with usePagination
  const [currentPage, setCurrentPage] = useState<number>(0);
  let pageSize = 10;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/*
        props

      */}
      {/* for now its a only wat to connect pagination and table */}

      <Table currentPage={currentPage} pageSize={pageSize} />
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default IndexPage;
