const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const multer = require('multer');
const express = require('express');

const routes = require('../routes/index');

module.exports = (app) => {
    
    // Setting
    app.set('port',process.env.PORT || 3000);
    app.set('views',path.join(__dirname, '../views'));
    app.engine('.hbs', engine({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs',
        helpers: require('./helpers'),
    }));

    app.set('view engine', '.hbs');

    // Middleware
    app.use(morgan('dev'));
    app.use(multer({dest: path.join(__dirname,'../public/upload/temp')}).single('image'));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    //Routes
    routes(app);

    // Static files
    app.use(express.static(path.join(__dirname, '../public')));

    //Error handlers.
    /*
    if('development' === app.get('env')){
        app.use(express.errorHandler);
    };
    */


    return app;
}