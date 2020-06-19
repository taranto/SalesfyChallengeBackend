import * as express from "express";

class TranslateController {
  public async index(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    if (Number(req.query.translate) === 1) {
      return res.send("one");
    }
    return res.status(400).send("not implemented yet");
  }
}
export default new TranslateController();
