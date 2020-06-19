import app from "../src/app";
import * as chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";

chai.use(chaiHttp);
function makeid(length: Number) {
  var result = "";
  var characters =
    " qwertyuiopasdfghjklçzxcvbnm,.[]QWERTYUIOPASDFGHJKLÇZXCVBNM?:><}!@#$%*()_+=-";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

describe("Hello API Request", () => {
  it("should return success response on call", () => {
    return chai
      .request(app)
      .get("?translate=0")
      .then((res) => {
        chai.expect(res.text).to.eql("zero");
        chai.expect(res.status).to.eql(200);
      });
  });
  it("should return success response on call", () => {
    return chai
      .request(app)
      .get("?translate=1")
      .then((res) => {
        chai.expect(res.text).to.eql("one");
        chai.expect(res.status).to.eql(200);
      });
  });
  it("should return success response on call", () => {
    return chai
      .request(app)
      .get("?translate=154")
      .then((res) => {
        chai.expect(res.text).to.eql("one hundred fifty four");
        chai.expect(res.status).to.eql(200);
      });
  });
  it("should return bad request when I entry with a string call", () => {
    return chai
      .request(app)
      .get(`?translate=${makeid(15)}`)
      .then((res) => {
        chai.expect(res.text).to.eql("Entries must be only a number");
        chai.expect(res.status).to.eql(400);
      });
  });
  it("should return bad request when I entry with number larger than 1 tillion", () => {
    return chai
      .request(app)
      .get(`?translate=${Math.floor(Math.random() * 10000000000000)}`)
      .then((res) => {
        chai.expect(res.text).to.eql("Entries must be less than 1 trillion");
        chai.expect(res.status).to.eql(400);
      });
  });
  it("should return bad request when I entry with number larger than 1 tillion", () => {
    return chai
      .request(app)
      .get(`?translate=${Math.floor(Math.random() * -1000000000000)}`)
      .then((res) => {
        chai.expect(res.text).to.eql("Entries must be positive");
        chai.expect(res.status).to.eql(400);
      });
  });
});
