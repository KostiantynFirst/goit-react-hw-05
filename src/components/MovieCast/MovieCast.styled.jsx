import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ActorCard = styled.div`
  width: 200px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ActorImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ActorInfo = styled.div`
  padding: 16px;
`;

export const NoImage = styled.div`
  background-color: #ccc;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;