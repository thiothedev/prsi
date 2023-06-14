import { CardType } from '../../../typings/card';

interface Props {
  type: CardType;
  value: number;
  hidden?: boolean;
}

const Card = ({ type, value, hidden = false }: Props): JSX.Element => (
  <div className="card">
    {hidden === false ? (
      <img src={`/img/cards/${value}${type}.png`} alt="Card" height={72} />
    ) : (
      <img src={`/img/cards/blank-card.png`} alt="Card" height={72} />
    )}
  </div>
);

export default Card;
