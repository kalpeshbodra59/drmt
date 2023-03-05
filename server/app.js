const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require('./app/mongoose');
const routes = require('./app/routes');
const PORT = process.env.PORT || 5000;

const app = express();
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

mongoose.configure();

// Configure body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes.declare(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
