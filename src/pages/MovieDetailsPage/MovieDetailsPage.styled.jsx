import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const InfoBox = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const InfoLinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 15px;

  li {
    margin-bottom: 10px;
  }
`;

export const InfoItemLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;



