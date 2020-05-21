const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { secret } = require("../../config/auth");

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
};

 router.get('/', async (request, response) => { // Listar todos
    try {
        const user = await User.find().populate('user');

        return response.send({ user })
    } catch (error) {
        return response.status(400).send({ error: 'Error loading Users' });
    }

});

router.post("/register", async (request, response) => {
  const { foneNumber } = request.body;
  console.log({ foneNumber }); // Test ID
  try {
    console.log(request.body);
    if (await User.findOne({ foneNumber })) {
      console.log(User); // Usuário registrado
      return response.status(400).send({ error: `User already exists` });
    }

    const user = await User.create(request.body);

    return response.send({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (error) {
    return response.status(400).send({ error: `Registration Failed` });
  }
});

 router.patch("/:userId/addfriend", async (request, response) => {
   const {userId} = request.params;
   const { foneNumber } = request.body;  

   const friend = await User.findOne({ foneNumber })
   const user = await User.findById(userId)
   
   
   try {
     if (friend) {
       console.log(` Nome do Amigo: ${friend.name}`)
       console.log(` Nome do Usuario: ${user.name}`)
       const friendExist = await user.friends.find(friendAdd => friendAdd.name === friend.name)
       
       if(friendExist){
        return response.status(400).send({Message: 'friend already exists'})
       }

       //mudar para aceitar solicitacao de amizade, se necessario
      //  await friend.friends.push(user)
      //  await friend.save();
       await user.friends.push(friend)
       await user.save();

       console.log(user.friends)
       
       return response.status(200).send({ Message: `Friend Add` });
     }
   
   } catch (error) {

     return response.status(400).send({ error: `Registration Failed` });
   }
  });
 

router.post("/authenticate", async (request, response) => {
  const { foneNumber } = request.body;

  const user = await User.findOne({ foneNumber });

  if (!user) {
    return response.status(400).send({ error: "User not found" });
  }

  user.trustIds = undefined;

  response.send({
    user,
  });
});

module.exports = (app) => app.use("/user", router);
