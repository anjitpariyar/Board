import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Details from "components/page/product/Details";
const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      {" "}
      <Head>
        <title>Post single post</title>
      </Head>
      <div>
        {pid}
        <Details />
      </div>
    </>
  );
};

export default Post;
