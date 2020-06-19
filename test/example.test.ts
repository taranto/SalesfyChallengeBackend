import app from "../src/app";
import * as chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";

chai.use(chaiHttp);

describe("Hello API Request", () => {
  it("should return success response on call", () => {
    return chai
      .request(app)
      .get("?translate=1")
      .then((res) => {
        chai.expect(res.text).to.eql("one");
        chai.expect(res.status).to.eql(200);
      });
  });
  it("should return bad request on call", () => {
    return chai
      .request(app)
      .get(`?translate=${Math.floor(Math.random() * (Math.pow(2, 32) - 1))}`)
      .then((res) => {
        chai.expect(res.text).to.eql("not implemented yet");
        chai.expect(res.status).to.eql(400);
      });
  });
});
