import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  // busca() {
  //   const idsAmigos = usuario.getItem(amigos.id)
  //   return idsAmigos
  // }
  salvandoInformacoes = async () => {
    let usuario = {
      id: 19935629696, //(xx) x xxxx-xxxx
      nome: 'Victor2',
      amigos: [
        {
          id: 22222222222,
          nome: "Joao",
          idsAmigos: ['123']
        }
      ],
      idsAmigos: ['123'],
    }

    let eu = {
      id: 19935629695, //(xx) x xxxx-xxxx
      nome: 'Victor',
      amigos: [],
      idsAmigos: [],
    }
    eu.amigos.push(usuario)
    eu.idsAmigos.push(usuario.id)

    try {
      await AsyncStorage.setItem('usuarioInfo', JSON.stringify(eu)); // transformando o objeto em string
    } catch (error) {
      // Error saving data
    }
  };

  buscandoInformacoes = async () => {
    try {
      const value = await AsyncStorage.getItem('usuarioInfo');
      if (value !== null) {
        // We have data!!
        //console.log(JSON.parse(value).id);
        console.log(JSON.parse(value).nome);
        console.log(`IDs dos meus amigos ${JSON.parse(value).idsAmigos}`);
        console.log(`IDs dos amigos dos meus amigos ${JSON.parse(value).amigos[0].idsAmigos}`); // transformar string em objeto novamente
      }
      //console.log(value);
    } catch (error) {
      // Error retrieving data
    }
  };
  render() {
    this.salvandoInformacoes()
    this.buscandoInformacoes()

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Teste da Rede de Fidelidade</Text>
        <Text style={styles.instructions}>Reestruturando App.js</Text>
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

