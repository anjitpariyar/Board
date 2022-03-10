import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import CommentForm from "./CommentForm";

interface Props {
  me?: boolean;
  name?: string;
  text?: string;
  date?: string;
  parent?: boolean;
  child?: boolean;
  threads?: Array<object>;
  key?: string;
}

const CommentBox: React.FC<Props> = ({
  me,
  name,
  text,
  parent,
  date,
  threads,
  child,
}) => {
  const [commentId, setCommentId] = useState(false);

  return (
    <>
      <Card
        parent={parent}
        onClick={() => setCommentId((commentId) => !commentId)}
      >
        <Date>{name}</Date>
        <CardBody>
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </CardBody>
        <Date style={{ textAlign: "right" }}>{date}</Date>
      </Card>
      {commentId && <CommentForm />}
      <Divider grey={true} style={{ margin: "30px 0" }} />
    </>
  );
};

export default CommentBox;

const Card = styled.article<{ parent?: boolean }>`
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const CardBody = styled.div`
  flex-grow: 2;
  p {
    margin: 0;
  }
`;
const Date = styled.span`
  opacity: 0.6;
  min-width: 150px;
  width: 150px;
`;

const Divider = styled.hr`
  height: 1px;
  border: 0;
  border-top: 1px solid #eee;
  margin: 10px 0;
`;
