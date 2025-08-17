import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/home">Go back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;