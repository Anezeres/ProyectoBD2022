module.exports = (app) => {
    
    // Setting

    app.set('port',process.env.PORT || 3000);

    return app;
}