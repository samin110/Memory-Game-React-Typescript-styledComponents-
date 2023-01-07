import React, { useState, useEffect, useRef } from "react";
import CardList from "./components/CardList";
import Timer from "./components/Timer";
import { cardListData } from "./data/cardListData";
import sound from "./assets/audio/success.mp3";

import { AppContainer } from "./styled-components/AppContainer";
import { CardSection, CardsWrapper } from "./styled-components/CardSection";
import { GameInfoSection, InfoElement, NewGameBtn, H1 } from "./styled-components/GameInfoSection";
import GameModal from "./components/Modal";

export type CardsType = {
  name: string;
  id: number;
  matched: boolean;
};

function App() {
  const [cards, setCards] = useState<CardsType[]>([]);
  const [firstClick, setFirstClick] = useState<CardsType | null>(null);
  const [secondClick, setSecondClick] = useState<CardsType | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [score, setScore] = useState(0);

  // This States is for Timer
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (firstClick && secondClick) {
      setScore(score + 1);
      setDisabled(true);
      if (firstClick.name === secondClick.name) {
        setCards((prevState) => {
          return prevState.map((card) => {
            if (card.name === firstClick.name) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        resetState();
      } else {
        console.log("Not Matched!!!");
        setTimeout(() => {
          resetState();
        }, 1000);
      }
    }
  }, [firstClick, secondClick]);

  const playAudio = () => {
    return new Audio(sound).play();
  };

  const shuffleCards = () => {
    const cardCrossX2 = [...cardListData, ...cardListData];
    const addIDToCards: CardsType[] = cardCrossX2.map((item) => ({
      ...item,
      id: Math.random(),
    }));
    for (let i = addIDToCards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i - 1));
      [addIDToCards[i], addIDToCards[randomIndex]] = [addIDToCards[randomIndex], addIDToCards[i]];
    }
    setCards(addIDToCards);
  };

  const handleClick = (card: CardsType) => {
    firstClick ? setSecondClick(card) : setFirstClick(card);
  };

  const resetState = () => {
    setFirstClick(null);
    setSecondClick(null);
    setDisabled(false);
  };

  function modal() {
    if (cards.length > 0 && cards.every((card) => card.matched === true)) {
      playAudio();
      return <GameModal score={score} seconds={seconds} minutes={minutes} />;
    }
  }

  return (
    <AppContainer>
      {modal()}
      <CardSection>
        {startGame && (
          <CardsWrapper>
            {cards.map((card) => (
              <CardList
                card={card}
                handleClick={handleClick}
                flipped={card === firstClick || card === secondClick || card.matched}
                disabled={disabled}
              />
            ))}
          </CardsWrapper>
        )}
      </CardSection>
      <GameInfoSection>
        <NewGameBtn onClick={() => window.location.reload()}>New Game</NewGameBtn>
        <NewGameBtn
          onClick={() => {
            setStartGame(true);
          }}
        >
          Start Game
        </NewGameBtn>
        {/* Timer is Component*/}
        {startGame && (
          <Timer cards={cards} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} />
        )}
        {startGame && (
          <InfoElement>
            <H1>Score = </H1> {score}
          </InfoElement>
        )}
      </GameInfoSection>
    </AppContainer>
  );
}

export default App;
