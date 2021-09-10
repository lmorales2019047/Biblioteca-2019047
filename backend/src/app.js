const app = require("express")();
const express = require("express")
const morgan = require("morgan");
const cors = require("cors");
const { createRoles, createAdminUser, createBibliographyTypes } = require("./libs/initialSetup");

createRoles();
createAdminUser();
createBibliographyTypes();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(require("./routes/login"));
app.use(require("./routes/user"));

module.exports = app;