var txtPrinciples = require('../model/principles');

// roles guide
var renderIntro = function (req, res) {
    res.render('base', txtPrinciples.txtIntroduction);
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

// value-based
var renderValueBased = function (req, res) {
    res.render('principles/valuebased', txtPrinciples.txtValueBased);
 };

 module.exports.valuebased = function (req, res) {
    renderValueBased(req, res);
};

// timeboxing
var renderTimeBoxing = function (req, res) {
    res.render('principles/timeboxing', txtPrinciples.txtTimeBoxing);
 };

 module.exports.timeboxing = function (req, res) {
    renderTimeBoxing(req, res);
};

// iterative
var renderIterative = function (req, res) {
    res.render('principles/iterative', txtPrinciples.txtIterative);
 };

 module.exports.iterative = function (req, res) {
    renderIterative(req, res);
};

// versus
var renderVs = function (req, res) {
    res.render('base', txtPrinciples.txtVs);
 };

 module.exports.vs = function (req, res) {
    renderVs(req, res);
};