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
  inside?: boolean;
}

const CommentBox: React.FC<Props> = ({
  me,
  name,
  text,
  parent,
  date,
  threads,
  child,
  inside,
}) => {
  const [commentId, setCommentId] = useState(false);

  return (
    <>
      <Card
        parent={parent}
        onClick={() => setCommentId((commentId) => !commentId)}
        inside={inside}
      >
        <Date>{name}</Date>
        <CardBody>
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </CardBody>
        <Date style={{ textAlign: "right" }}>{date}</Date>
      </Card>
      {commentId && <CommentForm />}

      {child && (
        <div style={{ marginBottom: "15px" }}>
          {threads?.map((data: Props, index) => {
            return (
              <>
                <CommentBox
                  {...data}
                  key={index.toString() + data?.date}
                  inside={true}
                />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CommentBox;

const Card = styled.article<{ parent?: boolean; inside?: boolean }>`
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  cursor: pointer;
  border-top: 1px solid #eee;

  padding: ${({ inside }) => (inside ? "9px 12px 7px" : "12px 0")};
  border: ${({ inside }) => inside && "1px solid #ddd"};
  background-color: ${({ inside }) => inside && "#fafafa"};
  margin-left: ${({ inside }) => inside && "30px"};
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
