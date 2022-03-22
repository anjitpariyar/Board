import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Details from "components/page/product/Details";
import { Container } from "styled/Container";
import CommentsBoard from "components/CommentsBoard";
import CommentForm from "components/CommentForm";
import CommentBox from "components/CommentBox";
import { commentsJson } from "utils/sample-data";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  // comments data
  const page = router.query.page ? +router.query.page : undefined;
  const onPageChange = (n) => {
    if (n) {
      router.push(`/?page=${n}`, undefined, { shallow: true });
    }
  };
  const settings = {
    data: commentsJson, //data as json
    pageSize: 20, // default pagesize is 10
    activePage: 1, // default is 1
    prev: <span>{"<"}</span>, // default is <,
    next: <span>{">"}</span>, // default is >,
    page: page,
    onPageChange: onPageChange, // required
    CommentForm: CommentForm, //required
    CommentBox: CommentBox, //required
  };
  return (
    <>
      {" "}
      <Head>
        <title>Post single post</title>
      </Head>
      <div>
        <Container>
          <Details pid={pid} />
          {/* comments */}
          <CommentsBoard {...settings} />
        </Container>
      </div>
    </>
  );
};

export default Post;
