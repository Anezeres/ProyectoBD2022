const controller = {};

controller.index = (req, res) => {
    res.render('index');
};

controller.about = (req, res) => {
    res.render('about-us');
};

controller.servicios = (req, res) => {
    res.render('services');
};

module.exports = controller;
