const controller = {};
const { Pool } = require('pg');
const database = require('../database');

controller.index = (req, res) => {
    res.render('index');
};

controller.about = (req, res) => {
    res.render('about-us');
};

controller.servicios = (req, res) => {
    res.render('services');
};

controller.login = (req, res) => {
    res.render('login');
};

controller.contact = (req, res) => {
    res.render('contact');
};

controller.register = (req, res) => {
    res.render('register');
};

controller.prueba = async (req, res) => {
    const response = await database.getUsuarios();
    console.log(response);
};

module.exports = controller;
