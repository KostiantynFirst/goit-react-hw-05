import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

export const SearchForm = styled.form`

  display: flex;
  align-items:center;
  margin-bottom: 20px;

  input {
      flex: 1;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #007bff;
      border-radius: 5px;
      margin-right: 10px;

      &:focus {
      outline: none;
}
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }

  }

`;

export const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    display: block;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

export const NoResultsMessage = styled.div`
  color: #ff0000;
  font-size: 18px;
  margin-top: 20px;
`;