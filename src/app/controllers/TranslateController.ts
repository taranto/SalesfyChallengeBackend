import * as express from "express";

class TranslateController {
  async index(
    req: express.Request,
    res: express.Response
  ): Promise<void | any> {
    try {
      return res.json({ result: "one" });
    } catch (err) {
      return res.json(err);
    }
  }
}
export default new TranslateController();
