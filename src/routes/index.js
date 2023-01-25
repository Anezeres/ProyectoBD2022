const express = require('express');
const router = express.Router();

const home = require('../controllers/home');
const image = require('../controllers/image');


module.exports = app => {

    router.get('/', home.index);
    router.get('/trabajador/:id', image.index);
    router.post('/trabajador', image.create);
    router.post('/trabajador/:id/like', image.like);
    router.post('/trabajador/:id/comment', image.comment);
    router.delete('/trabajador/:id', image.remove);


    app.use(router);
}