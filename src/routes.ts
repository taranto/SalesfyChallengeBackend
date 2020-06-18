import * as express from "express";
//import * as TranslateController from "./app/controllers/TranslateController";

export = (() => {
  let router = express.Router();
  router.get("/translate", (req: express.Request, res: express.Response) => {
    return res.json({ msg: "ok!" });
  });
  router.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World");
  });
  return router;
})();
