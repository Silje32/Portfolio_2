import styled from "styled-components";

export const StyledHeading = styled.h1`
  color: black;
  background-color: ${({ theme }) => theme.colors.header};
  font-family: haboro-serif, serif;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
  padding: 20px;
`;

export const StyledH2 = styled.h2`
  color: #4ba69d;
  padding: 5px;
  font-family: haboro-serif, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
`;

export const StyledH4 = styled.h4`
  color: white;
  font-family: haboro-serif, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  text-align: right;
`;
