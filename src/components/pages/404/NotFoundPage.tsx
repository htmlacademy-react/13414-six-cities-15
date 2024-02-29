import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>404 Not Found</h1>
    <Link to="/">Go back to homepage</Link>
  </div>
);

export default NotFoundPage;
