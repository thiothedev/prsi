import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

const App = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/game/:id" element={<GamePage />} />
  </Routes>
);

export default App;
