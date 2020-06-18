import * as express from "express";
import TranslateController from "./app/controllers/TranslateController";

const router = express.Router();

router.get("/translate", TranslateController.index);

router.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World");
});

export default router;
