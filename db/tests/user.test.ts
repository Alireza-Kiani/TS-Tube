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
    //
    before( async () => {
        await UserServices.redButton();
        await UserServices.createUser({
            name: "Kiarash",
            username: "kiarash",
            password: "1234"
        })
    });
    //
    it("successful username", async () => {
        const response = await request(app).post("/user/find")
       .send({
           input: "kiarash",
           password: "1234"
       });
       assert.equal(response.status, 200);
       assert.equal(response.body.name, "Kiarash");
    });

    it("successful email", () => {

    });

    it("invalid input", async () => {
        const response = await request(app).post("/user/find")
        .send({

        });
        assert.equal(response.status, 400);
        expect(response.body.name).to.be.undefined;
    });

    it("user not found", async () => {
        const response = await request(app).post("/user/find")
        .send({
            input: "dummy",
            password: "1234"
        })

        assert.equal(response.status, 400);
        expect(await JSON.parse(response.text).error).to.equal("user not found")

    });

    it("wrong password", async () => {
        const response = await request(app).post("/user/find")
        .send({
            input: "kiarash",
            password: "12345"
        });

        assert.equal(response.status, 400);
        expect(await JSON.parse(response.text).error).to.equal("Wrong password")
    });
});