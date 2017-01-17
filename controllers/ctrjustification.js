var txtJustif = require('../model/justification');

// Business Justification Intro
var renderIntro = function (req, res) {
    res.render('base', txtJustif.txtIntro);
};

module.exports.bjIntro = function (req, res) {
    renderIntro(req, res);
};

// Business Justification Role
var renderRole = function (req, res) {
    res.render('base', txtJustif.txtRole);
};

module.exports.bjRole = function (req, res) {
    renderRole(req, res);
};

// Business Justification VDD
var renderVdd = function (req, res) {
    res.render('bj/vdd', txtJustif.txtVdd);
};

module.exports.bjVdd = function (req, res) {
    renderVdd(req, res);
};

// Business Justification importance
var renderImportance = function (req, res) {
    res.render('bj/importance', txtJustif.txtImportance);
};

module.exports.bjImportance = function (req, res) {
    renderImportance(req, res);
};

// Business Justification technique
var renderTechnique = function (req, res) {
    res.render('bj/technique', txtJustif.txtTechnique);
};

module.exports.bjTechnique = function (req, res) {
    renderTechnique(req, res);
};

// Business Justification Continuous Value
var renderContinuous = function (req, res) {
    res.render('bj/continuous', txtJustif.txtContinuous);
};

module.exports.bjContinuous = function (req, res) {
    renderContinuous(req, res);
};

// Business Justification Continuous Value
var renderBenefits = function (req, res) {
    res.render('bj/benefits', txtJustif.txtBenefits);
};

module.exports.bjBenefits = function (req, res) {
    renderBenefits(req, res);
};

// Business Justification summary
var renderSummary = function (req, res) {
    res.render('bj/summary', txtJustif.txtSummary);
};

module.exports.bjSummary = function (req, res) {
    renderSummary(req, res);
};

// Business Justification versus
var renderVersus = function (req, res) {
    res.render('base', txtJustif.txtVersus);
};

module.exports.bjVersus = function (req, res) {
    renderVersus(req, res);
};