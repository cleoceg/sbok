var txtOrganization = require('../model/organization');

// Organization Intro
var renderIntro = function (req, res) {
    res.render('org/intro', txtOrganization.txtIntro);
};

module.exports.orgIntro = function (req, res) {
    renderIntro(req, res);
};

// Organization Roles guide
var renderRoles = function (req, res) {
    res.render('org/roles', txtOrganization.txtRoles);
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