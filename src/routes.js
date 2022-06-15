const { Router } = require("express");

const routes = new Router();

const GetCurrentValueController = require("../src/app/controllers/GetCurrentValueController");

routes.get("/current-value", GetCurrentValueController.index);

module.exports = routes;
