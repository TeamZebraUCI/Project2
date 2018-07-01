// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.render('index', { title: 'Login or Signup'});
  });

  app.get("/newhero", function(req, res) {
    res.render('createhero', { title: 'Create Hero!'});
  });
  app.get("/selecthero", function(req, res) {
    db.Hero.findAll({}).then(function(results) {
    res.render('selecthero', { title: 'Select your Hero!', heros: results});
    });
  });
  app.get("/stats", function(req, res) {
    db.Hero.findAll({}).then(function(results) {
    res.render('stats', { title: 'Hero Stats!', heros: results});
    });
  });
  app.get("/game/:id", function(req, res) {
    db.Hero.findAll({ where: { id: req.params.id}}).then(results => {
    res.render('game', { title: 'Combat', heros: results});
    });
  });
}
