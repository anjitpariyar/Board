import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function () {
  const [data, setData] = useState({
    name: "",
    comment: "",
    password: "",
  });
  const { name, comment, password } = data;

  const handleChange = ({ target: { value, name } }) => {
    setData({ ...data, [name]: value });
  };
  const [disabled, setDisabled] = useState(true);

  const Submit = (e) => {
    e.preventDefault();
    console.log("data", data);
  };

  useEffect(() => {
    if (name && comment) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [data]);
  return (
    <Form onSubmit={Submit}>
      <Flex>
        <Left>
          {" "}
          <InputText
            placeholder="닉네임"
            name="name"
            onChange={handleChange}
            required
            value={name}
            type="text"
          />
          <InputText
            placeholder="비밀번호"
            name="password"
            onChange={handleChange}
            required
            value={password}
            type={"password"}
          />
        </Left>

        <Textarea
          placeholder="타인의 권리를 침해하거나 명예를 훼손하는 댓글은 운영원칙 및 관련 법률에 제재를 받을 수 있습니다.
          Shift+Enter 키를 동시에 누르면 줄바꿈이 됩니다."
          name="comment"
          onChange={handleChange}
          value={comment}
          required
        />
      </Flex>
      <Button type="submit" role="button">
        등록
      </Button>
    </Form>
  );
}

const Form = styled.form`
  border-block: 2px solid #3b4890;
  padding: 12px 0;
  margin-top: 12px;
`;

const InputText = styled.input`
  width: 126px;
  line-height: 29px;
  height: 31px;
  border: none;
  font-size: 12px;
  box-sizing: border-box;
  margin-bottom: 12px;
  outline: none;
  box-shadow: none;
  font-weight: normal;
  display: block;
  border: 1px solid #e5e5e5;
  padding: 13px;
  ::placeholder {
  }
`;
const Textarea = styled(InputText).attrs({ as: "textarea" })`
  height: 86px;
  width: 100%;
`;

const Button = styled.button<{ disabled?: boolean }>`
  background-color: #3b4890;
  border: none;
  font-weight: 500;
  padding: 8px 18px;
  color: ${({ theme }) => theme.colors.grey04};
  opacity: ${({ disabled }) => disabled && "0.6"};
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  color: #fff;
`;

const Flex = styled.div`
  display: flex;
  gap: 12px;
`;
const Left = styled.div``;
