import { describe, it } from "mocha";
import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("Product API Unit Tests", () => {

  it("should return all products", async () => {
    const res = await request(app).get("/products");

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("object");

    expect(res.body).to.have.property("count");
    expect(res.body.count).to.be.a("number");

    expect(res.body).to.have.property("products");
    expect(res.body.products).to.be.an("array");
  });

  it("should return product objects with required fields", async () => {
  const res = await request(app).get("/products");

  if (res.body.products.length > 0) {
    const product = res.body.products[0];
    expect(product).to.have.property("_id");
    expect(product).to.have.property("name");
    expect(product).to.have.property("price");
  }
});


});
