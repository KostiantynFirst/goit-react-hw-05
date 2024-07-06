import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieContainer = styled.div`
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    /* max-width: 1000px; */
    /* text-align: center; */
    margin: 0;
    padding-top: 10px;
`;

export const MovieHeading = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    /* margin-top: 20px; */
    color: #333;
`  

export const MovieList = styled.ul`
    width: 80%;
    margin: 20px auto;
    list-style-type: none;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const MovieItem = styled.li`
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
`;

export const MovieTitle = styled(Link)`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    text-decoration: none; 
    color: inherit;
`;