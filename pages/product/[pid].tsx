import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Details from "components/page/product/Details";
import { Container } from "styled/Container";
import CommentsWrapper from "components/page/product/CommentsWrapper";
const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  // comments data
  const datas = [
    {
      name: "しゅが?はぁと☆",
      id: 1,
      text: " 저 해봤어요~ 간편하게 잘 되어있더라고요. 문의글 남기면 금방 전화오고 빨라요!",
      date: "2022.02.11 13:21",
      parent: true,
      child: true,
      threads: [
        {
          id: 3,

          name: "しゅが?はぁと☆",
          text: "① 아메바 같은 단세포 2030개보지년들하고 ② 40대 닭대가리 패션좌파 앰창년놈들 ③ 슨상교 좀비 홍어조선족들 이 세부류 애미창년들이 나라 망치려고 개지랄 염병질 오지게 함 싸그리 참수 효시가 답이랑께",
          date: "2022.02.11 13:21",
          parent: false,
        },
      ],
    },
    {
      id: 2,
      me: true,
      name: "しゅが?はぁと☆",
      text: " ① 아메바 같은 단세포 2030개보지년들하고 ② 40대 닭대가리 패션좌파 앰창년놈들 ③ 슨상교 좀비 홍어조선족들 이 세부류 애미창년들이 나라 망치려고 개지랄 염병질 오지게 함 싸그리 참수 효시가 답이랑께",
      date: "2022.02.11 13:21",
      parent: true,
      child: false,
      //   threads: [],
    },
  ];
  return (
    <>
      {" "}
      <Head>
        <title>Post single post</title>
      </Head>
      <div>
        <Container>
          {pid}

          <Details />
          {/* comments */}
          <CommentsWrapper datas={datas} />
        </Container>
      </div>
    </>
  );
};

export default Post;
