// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
const db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.app.use(express.static("public"));
app.use(express.static("public"));

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them. 
// Routes
// =============================================================
require("./routes/handlebars-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(()=>{
    app.listen(PORT, () => console.log(`\nFuck! \nFuck You! \nWe're all on FIRE! \nListening on port http://localhost:${PORT}`));
});