import * as express from "express";
import TranslateController from "./app/controllers/TranslateController";

export = (() => {
  let router = express.Router();
  router.get("/translate", TranslateController.index);
  router.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World");
  });
  return router;
})();
