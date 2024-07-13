import request from "supertest";
import { expect } from "chai";

import app from "../src/index.js";

describe("GET /api", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/api")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property("message", "Hello, world!");
        done();
      });
  });
});
