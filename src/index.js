const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use(routes);

server.listen(port);
