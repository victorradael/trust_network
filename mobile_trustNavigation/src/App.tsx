import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff2" barStyle="light-content" />
      <View style={{flex: 1, backgroundColor: '#fff2'}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
