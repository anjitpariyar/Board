import { useState } from "react";
import styled from "styled-components";
// import CommentForm from "components/CommentForm";

const CommentsWrapper = ({ datas, CommentForm, CommentBox }) => {
  const [commentId, setCommentId] = useState(false);
  const openComment = (id) => {
    setCommentId(id);
  };

  return (
    <>
      <CommentWrapper>
        {datas.map((data, index) => {
          return (
            <CommentBox
              {...data}
              key={index.toString() + data?.date}
              openComment={openComment}
              commentId={commentId}
            />
          );
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
