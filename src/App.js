import  Component  from 'react';
import  AsyncStorage  from 'react-native';

export default class App extends Component {

  // busca() {
  //   const idsAmigos = usuario.getItem(amigos.id)
  //   return idsAmigos
  // }
  salvandoInformacoes = async () => {
    let amigoDoUsuario = [{
      id: 19935629696, //(xx) x xxxx-xxxx
      nome: 'Gabriel',
    },{
      idsAmigos: [3583540819, 3583426119 ], //Isso vai ter que ser buscado de algum lugar
    }]

    let usuario = {
      id: 19935629695, //(xx) x xxxx-xxxx
      nome: 'Victor',
      amigos: [],
      idsAmigos: [],
    }
    usuario.amigos.push(amigoDoUsuario)
    usuario.idsAmigos.push(amigoDoUsuario.id)

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
        console.log(`IDs dos amigos dos meus amigos ${JSON.parse(value).amigos[0].idsAmigos}`); // transformar string em objeto novamente // percorrer os amigos
      }
      //console.log(value);
    } catch (error) {
      // Error retrieving data
    }
  };
  render() {
    this.salvandoInformacoes()
    this.buscandoInformacoes()
  }
}

