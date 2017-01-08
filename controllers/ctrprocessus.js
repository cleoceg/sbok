var proc = require('../model/processes');


var renderProcessus = function (req, res) {
    res.render('processus', { 
      processus: eval('proc.'+req.params.id)
  });
};

module.exports.display = function (req, res) {
    renderProcessus(req, res);
};