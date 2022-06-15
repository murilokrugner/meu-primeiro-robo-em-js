const express = require("express");

const routes = require("./routes");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);

app.use(express.json());

app.use(cors());

app.use(routes);

server.listen(21028);
