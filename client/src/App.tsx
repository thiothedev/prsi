import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';

import { AppRoutes } from './utils/route';

const App = (): JSX.Element => (
  <Routes>
    <Route path={AppRoutes.HOME} element={<HomePage />} />
  </Routes>
);

export default App;
