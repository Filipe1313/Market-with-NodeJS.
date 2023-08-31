'use strict'
const express = require('express');
const clienteRouter = express.Router()
const clienteControllers = require('../controllers/clienteControllers')
const app = express();
const port = process.env.port || 3000

app.use(express.json());



clienteRouter.route('/api/registro')
    .post((req, res) => {
        clienteControllers.createUser(req, res);
    })


clienteRouter.route('/api/login')
    .post((req, res) => {
        clienteControllers.authenticUser(req, res);
    })



clienteRouter.route('/api/user')
    .get((req, res) => {
        clienteControllers.getUser(req, res);
    })


clienteRouter.route('/api/user/:id')
    .get((req, res) => {
        clienteControllers.deleteUser
    })
    .put((req, res) => {
        clienteControllers.updateUser
    });

module.exports = clienteRouter;


// app.get/put/delete etc..