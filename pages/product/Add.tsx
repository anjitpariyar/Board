import styled from "styled-components";
import "draft-js/dist/Draft.css";
import Head from "next/head";
import React, { useState, useCallback } from "react";
import ArticleEditor from "components/EditorPost";
import { Container } from "styled/Container";

export default function () {
  const [data, setData] = useState<any>({
    name: "",
    password: "",
    subject: "",
    body: "",
  });
  const { name, password, subject } = data;
  // internal state
  const handleChange = ({ target: { value, name, files } }) => {
    setData({ ...data, [name]: value });
  };
  // draft
  const handleEditorContent = (content: any) => {
    console.log("content", content);
    setData({ ...data, body: content, articleUpdated: true });
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log("data", data);
  };

  return (
    <>
      <Head>
        <title>Add Post</title>
      </Head>
      <main>
        <Container>
          <Form onSubmit={Submit}>
            {/* top part */}
            <div>
              <Flex>
                <Input
                  placeholder="닉네임"
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleChange}
                />
                <Input
                  placeholder="비밀번호"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                />
              </Flex>
              <Input
                placeholder="제목을 입력해 주세요."
                name="subject"
                type="text"
                width="100%"
                value={subject}
                onChange={handleChange}
              />
              <div style={{ margin: "2em 0", opacity: "0.6" }}>
                <small>
                  쉬운 비밀번호를 입력하면 타인의 수정, 삭제가 쉽습니다.
                </small>
                <br />
                <small>
                  음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민,
                  형사상의 책임을 질 수 있습니다.
                </small>
              </div>
            </div>

            {/* draft part */}
            <div>
              <ArticleEditor handleContent={handleEditorContent} />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Container>
      </main>
    </>
  );
}

const Form = styled.form`
  padding: 5em;
  margin: 3em;
  border: 2px solid #d5d5d5;
`;
const Flex = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;
const Input = styled.input<{
  height?: string;
  width?: string;
}>`
  height: ${({ height }) => height || "33px"};
  width: ${({ width }) => width || "204px"};
  padding: 0 12px;
  line-height: 35px;
  border: 1px solid #cecdce;
  color: #333;
  outline: none;
  box-shadow: none;
  font-size: 13px;
  box-sizing: border-box;
`;
