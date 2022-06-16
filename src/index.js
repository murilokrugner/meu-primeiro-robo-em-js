import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();
const server = require("http").Server(app);

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use(routes);

server.listen(port);
