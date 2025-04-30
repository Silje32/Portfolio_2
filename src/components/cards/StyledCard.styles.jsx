import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: #e8e0d1;
  border-radius: 5px;
  padding: 60px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 10px;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const StyledExamCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f1;
  border-radius: 5px;
  border-color: 2px black;
  padding: 60px;
  max-width: 600px;

  img {
    width: 100%;
    margin-bottom: 10px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledFrameworksCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f1;
  border-radius: 5px;
  border-color: 2px black;
  padding: 60px;
  margin-left: 20px;
  max-width: 600px;

  img {
    width: 100%;
    margin-bottom: 10px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledProjectCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f1;
  border-radius: 5px;
  border-color: 2px black;
  padding: 60px;
  margin-left: 20px;
  max-width: 600px;

  img {
    width: 100%;
    margin-bottom: 10px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledLink = styled.h3`
  font-size: 18px;
  margin: 15px 0px;

  a {
    color: #b76e79;
  }

  a:hover {
    color: #4ba69d;
  }
`;
