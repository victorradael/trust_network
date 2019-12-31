let amigoDoUsuario = [{
  id: 19935629696, //(xx) x xxxx-xxxx
  nome: 'Gabriel',
  // idsAmigos: [3583540819, 3583426119] //Isso vai ter que ser buscado de algum lugar
}]

let usuario = [{
  id: 19935629695, //(xx) x xxxx-xxxx
  nome: 'Victor',
  amigos: [],
  idsAmigos: []
}]

console.log(amigoDoUsuario)
console.log(usuario)

const getAmigosDoAmigo = amigo => amigo.id
let amigosDoAmigo = amigoDoUsuario.map(getAmigosDoAmigo)
usuario.idsAmigos.concat(amigosDoAmigo) // CONCAT não funciona??
console.log(amigosDoAmigo)
console.log(usuario.idsAmigos)