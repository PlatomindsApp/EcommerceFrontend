import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
