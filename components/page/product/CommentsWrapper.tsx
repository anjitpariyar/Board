import React from "react";
import styled from "styled-components";
import CommentForm from "components/CommentForm";
import CommentBox from "components/CommentBox";

const CommentsWrapper = () => {
  const datas = [
    {
      name: "しゅが?はぁと☆",
      text: " 저 해봤어요~ 간편하게 잘 되어있더라고요. 문의글 남기면 금방 전화오고 빨라요!",
      date: "2022.02.11 13:21",
      parent: true,
      child: true,
      threads: [
        {
          name: "しゅが?はぁと☆",
          text: "① 아메바 같은 단세포 2030개보지년들하고 ② 40대 닭대가리 패션좌파 앰창년놈들 ③ 슨상교 좀비 홍어조선족들 이 세부류 애미창년들이 나라 망치려고 개지랄 염병질 오지게 함 싸그리 참수 효시가 답이랑께",
          date: "2022.02.11 13:21",
          parent: false,
        },
      ],
    },
    {
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
      <CommentWrapper>
        {datas.map((data, index) => {
          return <CommentBox {...data} key={index.toString() + data?.date} />;
        })}
      </CommentWrapper>
      <CommentForm />
    </>
  );
};

export default CommentsWrapper;

const CommentWrapper = styled.div`
  margin-top: 60px;
`;
