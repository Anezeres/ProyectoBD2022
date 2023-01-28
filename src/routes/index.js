const express = require('express');
const router = express.Router();

const home = require('../controllers/home');
const image = require('../controllers/image');


module.exports = app => {
    
    router.get('/', home.index);
    router.get('/about-us', home.about);
    router.get('/services', home.servicios);
    router.get('/login', home.login);
    router.get('/contact', home.contact);
    router.get('/register', home.register);
    router.get('/prueba', home.prueba);
    /*
    router.get('/trabajador/:id', image.index);
    router.post('/trabajador', image.create);
    router.post('/trabajador/:id/like', image.like);
    router.post('/trabajador/:id/comment', image.comment);
    router.delete('/trabajador/:id', image.remove);
    */


    app.use(router);
}