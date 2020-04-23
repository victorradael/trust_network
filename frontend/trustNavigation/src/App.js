/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import logo from './assets/logo2.png';
const App = () => {
  return (
    <>
      <View style={styles.loadingPage}>
        <Image source={logo} style={{width: 200, height: 210}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  loadingPage: {
    backgroundColor: '#0A74C6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
