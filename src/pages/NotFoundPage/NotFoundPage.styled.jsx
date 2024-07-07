import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundContainer = styled.div`
  margin: 0 auto;
  padding: 64px;
  text-align: center;

  /* Optional media query for responsiveness (adjust as needed) */
  @media (max-width: 768px) {
    padding: 32px;
  }
`;

export const NotFoundTitle = styled.b`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const NotFoundLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f51b5;
  color: white;
  padding: 4px;
  max-width: 256px;
  border-radius: 8px;
  gap: 2px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #283a7c; /* Darker shade on hover/focus */
  }
`;