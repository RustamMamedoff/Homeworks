import React from 'react';

const ProtectedRoute = ({ isAuthenticated, children, ...rest }) => {
  return (
    <Route {...rest} render={() =>
      isAuthenticated ? children : <Redirect to="/login" />
    } />
  );
};

export default ProtectedRoute;
