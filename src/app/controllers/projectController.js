const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Warning = require('../models/warnings');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (request, response) => { // Listar todos
    try {
        const warning = await Warning.find().populate('user');

        return response.send({ warning })
    } catch (error) {
        return response.status(400).send({ error: 'Error loading Warnings' });
    }

});

router.get('/:warningId', async (request, response) => { // Listar apenas um
    try {
        const warning = await Warning.findById(request.params.warningId).populate('user');

        return response.send({ warning })
    } catch (error) {
        return response.status(400).send({ error: 'Error loading Warning' });
    }

});

router.post('/', async (request, response) => { // Criar
    try {

        const warning = await Warning.create({ ...request.body, user: request.userId });

        return response.send({ warning })
    } catch (error) {
        return response.status(400).send({ error: 'Error creating new Warning' });
    }
});

router.put('/:warningId', async (request, response) => { // Alterar
    const {title, description} = request.body;
    
    try {
        const warning = await Warning.findByIdAndUpdate(request.params.warningId, {
            title,
            description,
        }, { new: true });

        await warning.save();

        return response.send({ warning })
    } catch (error) {
        return response.status(400).send({ error: 'Error change Warning' });
    }

});

router.delete('/:warningId', async (request, response) => { // Deletar
    try {
        await Warning.findByIdAndRemove(request.params.warningId);

        return response.send('Warning Removed')
    } catch (error) {
        return response.status(400).send({ error: 'Error deleting Warning' });
    }

});

module.exports = app => app.use('/warnings', router);