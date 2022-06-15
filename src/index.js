import express from "express";

import routes from "./routes";
import cors from "cors";

const app = express();
const server = require("http").Server(app);

app.use(express.json());

app.use(cors());

app.use(routes);

server.listen(21039);
