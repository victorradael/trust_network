const express = require('express')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
};

router.post('/register', async (request, response) => {
    const { foneNumber } = request.body;
    console.log({foneNumber}) // Test ID 
    try {
        console.log(request.body)
        if (await User.findOne({ foneNumber })) {
            console.log(User) // Usuário registrado
            return response.status(400).send({ error: `User already exists` })
        }

        const user = await User.create(request.body)

        return response.send({
            user,
            token: generateToken({ id: user.id }),
        })
    } catch (error) {
        return response.status(400).send({ error: `Registration Failed` })
    }
});

router.post('/authenticate', async (request, response) => {
    const { foneNumber } = request.body;

    const user = await User.findOne({ foneNumber });

    if (!user) {
        return response.status(400).send({ error: 'User not found' })
    }

    user.trustIds = undefined;

    response.send({
        user,
        token: generateToken({ id: user.id }),
    });
});

module.exports = app => app.use('/auth', router);