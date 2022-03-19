import { sampleTablePropsData } from "utils/sample-data";
import { Container } from "styled/Container";
import Link from "next/link";

import TableBoard from "components/TableBoard";

// type import
import { PaginationOptions } from "interfaces";

const IndexPage = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      value: (item: any) => <span>{item.id}</span>,
    },
    {
      title: "Title",
      dataIndex: "title",
      value: (item: any) => (
        <Link href={"product/" + item.id}>
          <a>{item.title}</a>
        </Link>
      ),
    },
    {
      title: "Writer",
      dataIndex: "writer",
      value: (item: any) => <span>{item.writer}</span>,
    },
    {
      title: "Viewcount",
      dataIndex: "viewcount",
      value: (item: any) => <span>{item.viewcount}</span>,
    },
  ];

  //on page change
  // for now this is a page controller
  const onPageChange = (page) => {
    // router.push(`/?page=${page}`, undefined, { shallow: true });
  };

  const settings = {
    data: sampleTablePropsData, //data as json
    columns: columns, // way to use data
    pageSize: 12, // default pagesize is 10
    activePage: 1, // default is 1
    prev: <span>{"prev"}</span>, // default is <,
    next: <span>{"next"}</span>, // default is >,
    showCode: true, // default is false
  };

  return (
    <>
      {/*
        props

      */}
      {/* for now its a only wat to connect pagination and table */}
      <Container>
        <TableBoard {...settings} />
      </Container>
    </>
  );
};

export default IndexPage;
