import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

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
