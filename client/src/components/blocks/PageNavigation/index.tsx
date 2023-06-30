import { Link } from 'react-router-dom';

export const PageNavigation = (): JSX.Element => (
  <nav>
    <h2>Page Navigation</h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
);
