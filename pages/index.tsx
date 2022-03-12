import Pagination from "components/Pagination";
import Table from "components/Table";
import { useState, useEffect } from "react";
import { sampleTablePropsData } from "utils/sample-data";
import { useTable } from "Hook/Board";
import Search from "components/Search";
import { Container } from "styled/Container";
import { useRouter } from "next/router";

// type import
import { PaginationOptions } from "interfaces";
// import { ParsedUrlQuery } from "querystring";

const IndexPage = () => {
  const router = useRouter();

  // const { page }: { page: any } = parseInt(router.query.photoId as string, 10);
  const page = router.query.page ? +router.query.page : undefined;
  // console.log(typeof page);
  // crate a instance with usePagination
  const [currentPage, setCurrentPage] = useState<number>(1); // start with one
  // const [searchValue, setSearchValue] = useState<string>(""); // start with one

  let pageSize = 10;

  //on page change
  // for now this is a page controller
  const onPageChange = (page) => {
    router.push(`/?page=${page}`, undefined, { shallow: true });
  };

  const tableOption = {
    currentPage: currentPage, //defult 1
    data: sampleTablePropsData, //required
    pageSize: pageSize, //default is 10
    // searchValue: searchValue,
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

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);
  return (
    <>
      {/*
        props

      */}
      {/* for now its a only wat to connect pagination and table */}
      <Container>
        <Table data={pageData} />
        <Pagination {...paginationOptions} />
        <Search />
        {/* search */}

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
      </Container>
    </>
  );
};

export default IndexPage;
