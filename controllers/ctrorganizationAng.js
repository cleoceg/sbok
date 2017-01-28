var api = require('./ctrCommon') ;

var apiOptions = api.apiOptions;
var renderScreen = api.renderScreen;

// couple Screen - Route
var referral = {
	intro: ['angviews/org/intro','/org_intro'],
	roles: ['angviews/org/roles','/org_roles'],
	project: ['angviews/org/project','/org_project'],
	owner: ['angviews/org/owner','/org_owner'],
	master: ['angviews/org/master','/org_master'],
	team: ['angviews/org/team','/org_team'],
	portfolio: ['angviews/org/portfolio','/org_portfolio'],
	sum: ['angviews/org/summary','/org_sum'],
	vs: ['angviews/org/vs','/org_vs'],
	theories: ['angviews/org/theories','/org_theories']
};

// Organization Intro
module.exports.orgIntro = function (req, res) {
    //renderScreen(req, res, referral.intro[0], referral.intro[1]);
	res.render(referral.intro[0]);
};

// Organization Roles guide
module.exports.orgRoles = function (req, res) {
    //renderScreen(req, res, referral.roles[0], referral.roles[1]);
	res.render(referral.roles[0]);
};

// Organization Project Roles
module.exports.orgProject = function (req, res) {
    //renderScreen(req, res, referral.project[0], referral.project[1]);
	res.render(referral.project[0]);
};

// Organization Product Owner
module.exports.orgOwner = function (req, res) {
    //renderScreen(req, res, referral.owner[0], referral.owner[1]);
	res.render(referral.owner[0]);
};

// Organization Scrum Master
module.exports.orgMaster = function (req, res) {
    //renderScreen(req, res, referral.master[0], referral.master[1]);
	res.render(referral.master[0]);
};

// Organization Scrum Team
module.exports.orgTeam = function (req, res) {
    //renderScreen(req, res, referral.team[0], referral.team[1]);
	res.render(referral.team[0]);
};

// Organization Portfolio
module.exports.orgPortfolio = function (req, res) {
    //renderScreen(req, res, referral.portfolio[0], referral.portfolio[1]);
	res.render(referral.portfolio[0]);
};

// Organization Summary
module.exports.orgSummary = function (req, res) {
    //renderScreen(req, res, referral.sum[0], referral.sum[1]);
	res.render(referral.sum[0]);
};

// Organization Versus
module.exports.orgVersus = function (req, res) {
    //renderScreen(req, res, referral.vs[0], referral.vs[1]);
	res.render(referral.vs[0]);
};

// Organization HT theories
module.exports.orgTheories = function (req, res) {
    res.render(referral.theories[0]);
};