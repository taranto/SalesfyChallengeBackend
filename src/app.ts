import * as express from "express";
const routes = require("./routes");
import "./bootstrap";

const server = express();
server.use(routes);
server.use(express.json());
server.listen(process.env.NODE_PORT, () =>
  console.log(`Salesfy app listening on port ${process.env.NODE_PORT}!`)
);
module.exports = server;
