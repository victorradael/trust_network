function userCreate (name, foneNumber) {
    return  {
        name,
        foneNumber,
        amigos: [],
        addAmigos(amigo) {
            
           this.amigos = this.amigos.concat(amigo)
        }
    }
}

const mainUser = new userCreate();
console.log(mainUser)
// mainUser('Victor', 111111)



module.exports =  {mainUser};