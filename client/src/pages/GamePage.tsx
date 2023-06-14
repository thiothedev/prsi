import DefaultLayout from '../layouts/DefaultLayout';
import Card from '../components/elements/Card';

const GamePage = (): JSX.Element => (
  <DefaultLayout>
    <h1>Game</h1>
    {Array.from({ length: 4 }, (_, typeIndex) => (
      <div
        key={typeIndex}
        className="row"
        style={{
          display: 'flex',
        }}
      >
        {Array.from({ length: 13 }, (_, cardIndex) => (
          <Card key={cardIndex} type={typeIndex} value={cardIndex + 1} />
        ))}
      </div>
    ))}
  </DefaultLayout>
);

export default GamePage;
