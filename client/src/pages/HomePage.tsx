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
      <p>Enter Game Code:</p>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <input type="submit" value="Join" />
      </form>
    </DefaultLayout>
  );
};

export default HomePage;
