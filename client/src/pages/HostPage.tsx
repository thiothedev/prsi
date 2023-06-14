import { useNavigate } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';

const HostPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <h1>Hosting</h1>
      <h2>Code: A4ER72</h2>
      <p>Waiting for the second player...</p>
      <button onClick={() => navigate('/')}>Stop</button>
    </DefaultLayout>
  );
};

export default HostPage;
