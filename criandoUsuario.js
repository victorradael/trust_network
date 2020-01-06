function criandoUsuario (nome, telefone) {
    return  {
        nome,
        telefone,
        amigos: [],
        addAmigos(amigo) {
            
           this.amigos = this.amigos.concat(amigo)
            
        }
    }
}

const user1 = criandoUsuario('Victor', 0000000000)
console.log(user1)

user1.addAmigos(0808080)
user1.addAmigos(35833583)
user1.addAmigos(19992176474)
console.log(user1.amigos)