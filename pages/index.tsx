import { sampleTablePropsData } from "utils/sample-data";
import { Container } from "styled/Container";
import Link from "next/link";

import TableBoard from "components/TableBoard";
import { useRouter } from "next/router";
import Search from "components/Search";
import Goto from "components/Goto";

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
  const onPageChange = (n) => {
    if (n) {
      router.push(`/?page=${n}`, undefined, { shallow: true });
    }
  };
  const settings = {
    data: sampleTablePropsData, //data as json
    columns: columns, // way to use data
    pageSize: 10, // default pagesize is 10
    activePage: 1, // default is 1
    prev: <span>{"<"}</span>, // default is <,
    next: <span>{">"}</span>, // default is >,
    showCode: true, // default is false
    page: page,
    onPageChange: onPageChange, // required
  };

  // search Form submit
  const onFinish = (searchText) => {
    router.push(`/?keyword=${searchText}`, undefined, { shallow: true });
  };

  return (
    <>
      {/*
        props

      */}
      {/* for now its a only wat to connect pagination and table */}
      <Container>
        <div style={{ margin: "2em 0" }}>
          <Search
            placeholder="Search"
            buttonText={<span>Search</span>}
            onFinish={onFinish}
          />
        </div>

        <TableBoard {...settings} />
        <Goto
          data={sampleTablePropsData}
          onPageChange={onPageChange}
          pageSize={10}
        />
      </Container>
    </>
  );
};

export default IndexPage;
