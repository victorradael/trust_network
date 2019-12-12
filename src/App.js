import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  armazenadoInformacoes = async () => {
    let usuario = {
      id:"numerocelular",
      nome:"Victor",
      amigos:{
      }
    }
    try {
      await AsyncStorage.setItem('idusuario', JSON.stringify(usuario)); // transformando o objeto em string
    } catch (error) {
      // Error saving data
    }
  };
  
  buscandoInformacoes = async () => {
    try {
      const value = await AsyncStorage.getItem('idusuario');
      if (value !== null) {
        // We have data!!
        console.log(JSON.parse(value).id); // transformar em objeto novamente
      }
      console.log(value);
    } catch (error) {
      // Error retrieving data
    }
  };
  render() {
    this.armazenadoInformacoes()
    this.buscandoInformacoes()
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

