import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Navigation = () => {
    // Aqui você pode adicionar a lógica para verificar se o usuário está logado ou não
    const userIsLoggedIn = false; // Por exemplo, assume-se que o usuário está logado
  
    return (
      <>
        {userIsLoggedIn ? <AppStack /> : <AuthStack />}
      </>
    );
  };
  
  export default Navigation;