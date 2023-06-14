import { useNavigate } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';

import type { FormEvent } from 'react';

const HomePage = (): JSX.Element => {
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/game/524789');
  };

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <h2>Host Game</h2>
      <button onClick={() => navigate('/host')}>Host</button>
      <h2>Join Game</h2>
      <p>Enter Game Code:</p>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <input type="submit" value="Join" />
      </form>
    </DefaultLayout>
  );
};

export default HomePage;
