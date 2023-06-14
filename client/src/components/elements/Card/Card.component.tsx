import { CardType } from '../../../typings/card';

interface Props {
  type: CardType;
  value: number;
}

const Card = ({ type, value }: Props): JSX.Element => (
  <div className="card">
    <img src={`/img/cards/${value}${type}.png`} alt="Card" height={72} />
  </div>
);

export default Card;
