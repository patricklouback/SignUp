import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
      <Stack.Navigator screenOptions={{ 
        headerShown: false 
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    );
  };

  export default AppStack