import { sampleTablePropsData } from "utils/sample-data";
import { Container } from "styled/Container";
import Link from "next/link";

import TableBoard from "components/TableBoard";
import { useRouter } from "next/router";

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

  const router = useRouter();
  const page = router.query.page ? +router.query.page : undefined;

  const settings = {
    data: sampleTablePropsData, //data as json
    columns: columns, // way to use data
    pageSize: 10, // default pagesize is 10
    activePage: 1, // default is 1
    prev: <span>{"<"}</span>, // default is <,
    next: <span>{">"}</span>, // default is >,
    showCode: true, // default is false
    page: page,
    onPageChange: (n) => {
      if (n) {
        router.push(`/?page=${n}`, undefined, { shallow: true });
      }
    }, // required
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
