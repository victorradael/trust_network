const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { secret } = require("../../config/auth");

const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, secret, {
    expiresIn: 86400,
  });
}

router.post("/register", async (request, response) => {
  const { foneNumber } = request.body;
  console.log(` ID: 1 AuthController `); // Test ID
  console.log({ foneNumber });
  console.log(`ID: 2 AuthController `);
  console.log(request.body);
  try {
    if (await User.findOne({ foneNumber })) {
      return response.status(400).send({ error: `User already exists` });
    }

    const user = await User.create(request.body);
    console.log(`ID: 3 AuthController `);
    console.log(user); // Usuário registrado

    return response.send({
      user,
      token: generateToken({ id: user.id }),
    });
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
    token: generateToken({ id: user.id }),
  });
});

module.exports = (app) => app.use("/user", router);
