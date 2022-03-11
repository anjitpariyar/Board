import styled from "styled-components";

export const Title = styled.h2`
  font-size: 11rem;
  font-weight: lighter;
  margin: 0;
  line-height: 1;
  color: ${({ theme, color }) => color === "white" && theme.colors.white};
`;

export const Button = styled.button`
  background: #3b4890;
  border-color: #29367c;
  text-shadow: 0px -1px #1d2761;
  color: #fff;
  height: 40px;
  border-radius: 2px;
  font-size: 14px;
  padding: 2px 24px;
`;
