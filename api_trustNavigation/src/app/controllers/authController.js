const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { secret } = require("../../config/auth");

const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

router.get("/", async (request, response) => {
  // Listar todos
  try {
    const user = await User.find();
    console.log("ID 0 : Auth Controller");
    console.log(user);

    return response.send({ user });
  } catch (error) {
    return response.status(400).send({ error: "Error loading Users" });
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

// router.post("/addfriend", async (request, response) => {
//   const { foneNumber } = request.body;
//   console.log(request.body);
//   console.log({ foneNumber }); // Test ID
//   try {
//     if (await User.findOne({ foneNumber })) {
//       const friend = await Warning.findOneByIdAndUpdate(
//         foneNumber,
//         {
//           title,
//           description,
//         },
//         { new: true }
//       );
//       return response.status(200).send({ Message: `Friend Add` });
//     }

//     const user = await User.create(request.body);
//     console.log(User); // Usuário registrado

//     return response.send({
//       user,
//       token: generateToken({ id: user.id }),
//     });
//   } catch (error) {
//     return response.status(400).send({ error: `Registration Failed` });
//   }
// });

router.post("/authenticate", async (request, response) => {
  const { foneNumber } = request.body;

  const user = await User.findOne({ foneNumber });

  if (!user) {
    return response.status(400).send({ error: "User not found" });
  }

  user.trustIds = undefined;

  response.send({
    user,
    token: generateToken({ id: user.id }),
  });
});

module.exports = (app) => app.use("/user", router);
