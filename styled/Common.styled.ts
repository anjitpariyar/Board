import styled from "styled-components";

export const Title = styled.h2`
  font-size: 11rem;
  font-weight: lighter;
  margin: 0;
  line-height: 1;
  color: ${({ theme, color }) => color === "white" && theme.colors.white};
`;
