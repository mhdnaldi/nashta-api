const routes = require("express").Router();
const events = require("./route/event");

routes.use("/", events);

module.exports = routes;
