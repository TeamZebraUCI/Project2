// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.render('index');
  });
  app.get("/newhero", function(req, res) {
    res.render('createhero');
  });
  app.get("/game", function(req, res) {
    res.render('game');
  });
  app.get("/stats", function(req, res) {
    res.render('stats');
  });
}
