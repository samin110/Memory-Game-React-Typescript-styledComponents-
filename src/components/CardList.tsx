import cardBackImage from "../assets/images/back-image.png";
import { CardFront, CardBack, CardStyled } from "../styled-components/CardSection";

type CardProps = {
  card: {
    name: string;
    id: number;
    matched: boolean;
  };
  handleClick: (card: { name: string; id: number; matched: boolean }) => void;
  flipped: boolean;
  disabled: boolean;
};

const CardList = ({ card, handleClick, flipped, disabled }: CardProps) => {
  return (
    <CardStyled key={card.id}>
      <CardFront src={card.name} flipped={flipped} />
      <CardBack src={cardBackImage} flipped={flipped} onClick={() => !disabled && handleClick(card)} />
    </CardStyled>
  );
};

export default CardList;
