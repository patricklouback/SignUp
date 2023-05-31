import React from 'react';
import { useSelector } from 'react-redux';

import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const userIsLoggedIn = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      {userIsLoggedIn ? <AppStack /> : <AuthStack />}
    </>
  );
};

export default Navigation;