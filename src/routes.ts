import * as express from "express";
import TranslateController from "./app/controllers/TranslateController";

const router = express.Router();

router.get("/", TranslateController.index);

export default router;
