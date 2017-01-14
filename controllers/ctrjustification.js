var txtJustif = require('../model/justification');

// Business Justification Intro
var renderIntro = function (req, res) {
    res.render('bj/intro', txtJustif.txtIntro);
};

module.exports.bjIntro = function (req, res) {
    renderIntro(req, res);
};

// Business Justification Role
var renderRole = function (req, res) {
    res.render('bj/role', txtJustif.txtRole);
};

module.exports.bjRole = function (req, res) {
    renderRole(req, res);
};