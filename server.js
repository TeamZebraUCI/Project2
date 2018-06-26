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
// const db = require("./models");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Import routes and give the server access to them. 
// Routes
// =============================================================
require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);

// db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
// });