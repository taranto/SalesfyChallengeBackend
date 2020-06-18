import { Request, Response } from "express";

module.exports = {
  async index(req: Request, res: Response) {
    return res.json({ msg: "ok!" });
  },
};
