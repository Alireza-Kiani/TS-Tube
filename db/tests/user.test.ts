import { expect } from 'chai';
import 'mocha';
import done from "chai"

import app from "../src/app";
import request from "supertest";


import sinon from 'sinon'
sinon.stub(console, "log")

describe("Sign up", () => {

   before(function() {

   });

   after(function() {

   });

   it('invalid input', async () => {
         await request(app)
         .post("/user/create")
         .send()
         .expect(400);
   });

   it('duplicate', (done) => {
         request(app).post("/user/create")
         .send({
             name: "Kiarash",
             username: "kiarash",
             password: "1234"
         }).then((response) => {
             expect(response.status).to.equal(400);
             done()
         })
   });
});

describe("Log in", () => {
    it('invalid input', async () => {
             await request(app)
             .post("/user/find")
             .send()
             .expect(400);
       });
})