var txtPrinciples = require('../model/principles');

// roles guide
var renderIntro = function (req, res) {
    res.render('principles/intro', txtPrinciples.txtIntroduction);
 };

 module.exports.intro = function (req, res) {
    renderIntro(req, res);
};

// EPC
var renderEpc = function (req, res) {
    res.render('principles/epc', txtPrinciples.txtEpc);
 };

 module.exports.epc = function (req, res) {
    renderEpc(req, res);
};

// Self-Organization
var renderSelforg = function (req, res) {
    res.render('principles/selforg', txtPrinciples.txtSelforg);
 };

 module.exports.selforg = function (req, res) {
    renderSelforg(req, res);
};

// Collaboration
var renderCollabo = function (req, res) {
    res.render('principles/collab', txtPrinciples.txtCollaboration);
 };

 module.exports.collaboration = function (req, res) {
    renderCollabo(req, res);
};