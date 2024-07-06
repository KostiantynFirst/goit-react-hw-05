import styled from "styled-components";

export const MovieContainer = styled.div`
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const PosterImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    @media (min-width: 768px) {
        width: 300px;
        height: auto;
    }
`;

export const MovieDetails = styled.div`
    flex: 1;
    padding-left: 20px;
`;

export const NoImage = styled.div`
    width: 300px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    color: #333;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MovieTitle = styled.h1`
    font-size: 32px;
    margin-bottom: 10px;
`;

export const InfoParagraph = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
`;

export const OverviewHeading = styled.h2`
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const GenresHeading = styled.h2`
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
`

export const GenreList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const GenreItem = styled.li`
    font-size: 18px;
    margin-bottom: 5px;
`;

export const UserScore = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #f39c12;
`;

export const Status = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #2ecc71;
`;

export const OverviewText = styled.p`
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 20px;
`;

export const GenreBadge = styled.span`
    background-color: #3498db;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    padding: 5px 10px;
    margin-right: 10px;
`;