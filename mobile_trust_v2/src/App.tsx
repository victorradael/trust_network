import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider} from './hooks/auth';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <AuthProvider>
        <View style={{ flex: 1, backgroundColor: '000000' }}>
          <Routes />
        </View>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
