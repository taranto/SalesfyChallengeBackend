import * as express from "express";
import translateNumber from "../../util/ChangeNumberToWords";
class TranslateController {
  public async index(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response | any> {
    if (isNaN(Number(req.query.translate))) {
      return res.status(400).send("Entries must be only a number");
    }
    if (Number(req.query.translate) > 999999999999) {
      return res.status(400).send("Entries must be less than 1 trillion");
    }
    if (Number(req.query.translate) < 0) {
      return res.status(400).send("Entries must be positive");
    }
    if (Number(req.query.translate) % 1 !== 0) {
      return res.status(400).send("Entries must be integer");
    }
    return res.send(translateNumber(Number(req.query.translate)));
  }
}
export default new TranslateController();
