import * as express from "express";

class TranslateController {
  public async index(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    return res.json({ msg: "OK!" });
  }
}
export default new TranslateController();
