import styled, { keyframes } from "styled-components";

export const GameInfoSection = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
`;

export const NewGameBtn = styled.button`
  background: #000;
  color: white;
  font-size: 1.5rem;
  padding: 0.7rem 2rem;
  border: none;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  transition: 0.5s;
  margin-top: 1.5rem;
  &:active {
    transform: scale(0.8);
    transition: 0.5s;
  }
`;

export const H1 = styled.h1`
  color: orange;
  font-size: 1.5rem;
  display: inline;
`;

export const InfoElementAnimation = keyframes`
0%{transform:translateX(-600px);opacity:0};
80%{transform:translateX(20px)}
100%{transform:translateX(0px)};
`;
export const InfoElement = styled.div`
  background-color: white;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.5rem 0;
  border-radius: 5px;
  font-size: 1.5rem;
  animation: ${InfoElementAnimation} 1s;
  color: orange;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
`;
