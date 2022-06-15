import { Router } from "express";

const routes = new Router();

import GetCurrentValueController from "../src/app/controllers/GetCurrentValueController";

routes.get("/current-value", GetCurrentValueController.index);

export default routes;
