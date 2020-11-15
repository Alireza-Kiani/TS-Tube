import {expect, assert} from 'chai';
import 'mocha';
import request from "supertest";

import app from "../src/app";
import UserServices from "../src/controller/user/userServices";


//import sinon from 'sinon'
//sinon.stub(console, "log")

describe("Sign up", () => {
    //
    before( async () => {
        await UserServices.redButton();
    });
    //
    it("successful", async () => {
        const response = await request(app).post("/user/create")
        .send({
             name: "Kiarash",
             username: "kiarash",
             password: "1234"
        });
        assert.equal(201, response.status);
    });

    it('invalid input', async () => {
        let response: any;
        //
        response = await request(app).post("/user/create")
            .send({

            });
        assert.equal(400, response.status);
    });

    it('duplicated user', async () => {
        const response = await request(app).post("/user/create")
        .send({
             name: "Kiarash",
             username: "kiarash",
             password: "1234"
        });
        assert.equal(400, response.status);
    });
});

describe("Log in", () => {
    it("successful", () => {

    });

    it("invalid input", () => {

    });

    it("user not found", () => {

    });

    it("wrong password", () => {

    });
});