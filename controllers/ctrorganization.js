var txtOrganization = require('../model/organization');

// Organization Intro
var renderIntro = function (req, res) {
    res.render('base', txtOrganization.txtIntro);
};

module.exports.orgIntro = function (req, res) {
    renderIntro(req, res);
};

// Organization Roles guide
var renderRoles = function (req, res) {
    res.render('base', txtOrganization.txtRoles);
};

module.exports.orgRoles = function (req, res) {
    renderRoles(req, res);
};

// Organization Project Roles
var renderProject = function (req, res) {
    res.render('org/project', txtOrganization.txtProject);
};

module.exports.orgProject = function (req, res) {
    renderProject(req, res);
};

// Organization Product Owner
var renderOwner = function (req, res) {
    res.render('org/owner', txtOrganization.txtOwner);
};

module.exports.orgOwner = function (req, res) {
    renderOwner(req, res);
};

// Organization Scrum Master
var renderMaster = function (req, res) {
    res.render('org/master', txtOrganization.txtMaster);
};

module.exports.orgMaster = function (req, res) {
    renderMaster(req, res);
};

// Organization Scrum Team
var renderTeam = function (req, res) {
    res.render('org/team', txtOrganization.txtTeam);
};

module.exports.orgTeam = function (req, res) {
    renderTeam(req, res);
};

// Organization Portfolio
var renderPortfolio = function (req, res) {
    res.render('org/portfolio', txtOrganization.txtPortfolio);
};

module.exports.orgPortfolio = function (req, res) {
    renderPortfolio(req, res);
};

// Organization Summary
var renderSummary = function (req, res) {
    res.render('org/summary', txtOrganization.txtSummary);
};

module.exports.orgSummary = function (req, res) {
    renderSummary(req, res);
};

// Organization Versus
var renderVersus = function (req, res) {
    res.render('base', txtOrganization.txtVersus);
};

module.exports.orgVersus = function (req, res) {
    renderVersus(req, res);
};

// Organization HT theories
var renderTheories = function (req, res) {
    res.render('org/theories', txtOrganization.txtTheories);
};

module.exports.orgTheories = function (req, res) {
    renderTheories(req, res);
};