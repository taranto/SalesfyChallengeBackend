import * as express from "express";
const routes = require("./routes");

const server = express();
server.use(routes);
server.use(express.json());
server.listen(3333, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Salesfy Challenge Backend is listening on 3333`);
});
