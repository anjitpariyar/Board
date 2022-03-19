import Pagination from "./Pagination";
import Table from "./Table";
import { useState, useEffect } from "react";
import { useTable } from "Hook/Board";
import { useRouter } from "next/router";
import { PaginationOptions, TableBoardData } from "interfaces";

export default function TableBoard({
  pageSize,
  activePage,
  data,
  prev,
  next,
  showCode,
  columns,
}: TableBoardData) {
  const router = useRouter();

  // const { page }: { page: any } = parseInt(router.query.photoId as string, 10);
  const page = router.query.page ? +router.query.page : undefined;
  // console.log(typeof page);
  // crate a instance with usePagination
  const [currentPage, setCurrentPage] = useState<number>(activePage || 1); // start with one
  console.log(currentPage);
  //on page change
  // for now this is a page controller
  const onPageChange = (page) => {
    router.push(`/?page=${page}`, undefined, { shallow: true });
  };

  const tableOption = {
    currentPage: currentPage, //defult 1
    data: data, //required
    pageSize: pageSize || 10, //default is 10
    columns: columns, //required
    // searchValue: searchValue,
  };

  //initilizing table hook
  const { pageData, totalData } = useTable({ ...tableOption });
  // pagination option
  const paginationOptions: PaginationOptions = {
    currentPage: currentPage, //required
    pageSize: pageSize || 10, //required
    onPageChange: onPageChange, //required
    totalData: totalData, //required'
    prev: prev || <span>{"<"}</span>, // default is <,
    next: next || <span>{">"}</span>, // default is >,
  };

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
    }
  }, [page]);
  return (
    <>
      {/* for now its a only wat to connect pagination and table */}
      <Table data={pageData} columns={columns} />
      <Pagination {...paginationOptions} />
      {showCode && (
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
      )}
    </>
  );
}
