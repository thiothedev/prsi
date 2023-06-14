import { useNavigate } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Card from '../components/elements/Card';

import { CardType } from '../typings/card';

const GamePage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <h1>Game</h1>
      <p>Current Turn: You</p>
      <h2>Enemy Cards</h2>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Card type={CardType.LEAVES} value={7} hidden />
        <Card type={CardType.LEAVES} value={12} hidden />
        <Card type={CardType.HEARTS} value={1} hidden />
        <Card type={CardType.BELLS} value={3} hidden />
      </div>
      <h2>Deck</h2>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Card type={CardType.HEARTS} value={9} hidden />
        <Card type={CardType.BELLS} value={12} />
        <button>Take a card</button>
      </div>
      <h2>Your Cards</h2>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Card type={CardType.BELLS} value={2} />
        <Card type={CardType.ACORNS} value={13} />
        <Card type={CardType.HEARTS} value={7} />
        <Card type={CardType.ACORNS} value={7} />
      </div>
      <button onClick={() => navigate('/')}>Leave Game</button>
    </DefaultLayout>
  );
};

export default GamePage;
