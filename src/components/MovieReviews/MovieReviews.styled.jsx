import styled from "styled-components";

export const ReviewsContainer = styled.div`
    font-family: Arial, sans-serif;
    padding: 20px;
`;

export const ReviewsInfolist = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ReviewItem = styled.li`
    border: 1px, solid #ccc;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 20px;
`;

export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const AuthorAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

export const AuthorName = styled.div`
    font-weight: bold;
`;

export const ReviewContent = styled.p`
    font-size: 16px;
    line-height: 1.5;
`;

export const NoInfoMessage = styled.div`
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
`;