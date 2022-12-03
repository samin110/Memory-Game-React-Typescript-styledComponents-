import styled, { keyframes } from "styled-components";

export const CardSection = styled.div`
  display: grid;
  grid-column: 2/3;
`;

const CardAnimation = keyframes`
0%{opacity:0};
80%{opacity:0.8};
100%{opacity:1}
`;

export const CardsWrapper = styled.div`
  animation: ${CardAnimation} 2s linear;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  padding: 0 1rem;
  grid-gap: 0.2rem;
`;

export const CardStyled = styled.div`
  width: 150px;
  border: 3px solid #f42b03;
  height: 170px;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  background-color: #c0c0c0;
  position: relative;
  cursor: pointer;
`;

type CardFrontProps = CardBackProps;

export const CardFront = styled.img<CardFrontProps>`
  display: flex;
  align-item: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  transform: rotateY(90deg);
  transition: ease-in 0.2s;
  background-color: white;
  position: absolute;
  transform: ${(props) => (props.flipped ? "rotateY(0deg)" : null)};
  transition-delay: ${(props) => (props.flipped ? "0.2s" : null)};
`;

type CardBackProps = {
  flipped: boolean;
};

export const CardBack = styled.img<CardBackProps>`
  width: 100%;
  height: 100%;
  transition: transform ease-in 0.2s;
  transition-delay: 0.2s;
  transform: ${(props) => (props.flipped ? "rotateY(90deg)" : null)};
  transition-delay: ${(props) => (props.flipped ? "0s" : null)};
`;
