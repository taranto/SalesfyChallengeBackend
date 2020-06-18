const request = require("supertest");
const assert = require("assert");
const app = require("../js/app");

describe("if I call the route /translate, it should be retrieve number and status 200", () => {
  it("should return 200 in response HTTP", (done) => {
    request(app)
      .get("/translate")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body["one"]);
      })
      .end(done)
  });
});
 