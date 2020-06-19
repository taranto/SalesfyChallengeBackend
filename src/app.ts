import * as express from "express";
import * as morgan from "morgan";
import routes from "./routes";

import "./bootstrap";

class App {
  public app = express.application;
  public constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  private middlewares(): void {
    this.app.use(morgan("dev"));
  }
  private routes(): void {
    this.app.use(routes);
  }
}
export default new App().app;
