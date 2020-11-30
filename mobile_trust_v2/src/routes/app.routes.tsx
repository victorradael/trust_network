import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  > 
  </App.Navigator>
);

export default AppRoutes;
