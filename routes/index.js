var express = require('express');
var router = express.Router();
var ctrphases = require('../controllers/ctrphases');
var ctrrelease = require('../controllers/ctrrelease');
var ctrinitiate = require('../controllers/ctrinitiate');
var ctrplan = require('../controllers/ctrplan');
var ctrimplement = require('../controllers/ctrimplement');
var ctrreview = require('../controllers/ctrreview');
var ctrproc = require('../controllers/ctrprocessus');
var ctrunderc = require('../controllers/under_construction');
var ctrRisk = require('../controllers//ctrrisk');
var ctrPrinciples = require('../controllers/ctrprinciples');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'SBOK Guide' });
});

router.get('/about', function(req, res) {
    res.render('about',{});
});

// principles
router.get('/intro', ctrPrinciples.intro);
router.get('/epc', ctrPrinciples.epc);
router.get('/selforg', ctrPrinciples.selforg);
router.get('/collaboration', ctrPrinciples.collaboration);
router.get('/valuebased', ctrunderc.underconst);
router.get('/timeboxing', ctrunderc.underconst);
router.get('/iterative', ctrunderc.underconst);

// Phases
router.get('/phases', ctrphases.phases);
router.get('/release', ctrrelease.release);
router.get('/initiate', ctrinitiate.initiate);
router.get('/plan', ctrplan.plan);
router.get('/implement', ctrimplement.implement);
router.get('/review', ctrreview.review);
router.get('/processus/:id', ctrproc.display);

// Roles
router.get('/owner', ctrunderc.underconst);
router.get('/master', ctrunderc.underconst);
router.get('/team', ctrunderc.underconst);
router.get('/noncore', ctrunderc.underconst);

// Business Justification

// Quality

// Change

// Risks
router.get('/risk_role', ctrRisk.roles);
router.get('/risk_what', ctrRisk.what);
router.get('/risk_mgt', ctrRisk.management);
router.get('/risk_mini', ctrRisk.minimizing);
router.get('/risk_portfolio', ctrRisk.portfolio);
router.get('/risk_summary', ctrRisk.summary);
router.get('/risk_vs', ctrRisk.vs);

module.exports = router;
