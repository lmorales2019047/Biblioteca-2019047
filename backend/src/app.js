const app = require("express")();
const express = require("express")
const morgan = require("morgan");
const cors = require("cors");
const { createRoles, createAdminUser } = require("./libs/initialSetup");

createRoles();
createAdminUser();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(require("./routes/login"));

module.exports = app;