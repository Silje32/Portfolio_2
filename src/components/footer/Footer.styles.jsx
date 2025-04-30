import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: white;
  font-family: haboro-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  text-align: right;
  margin-right: 20px;
  display: flex;
  flex-direction: row-reverse;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 20px;
  height: 100px;
`;
