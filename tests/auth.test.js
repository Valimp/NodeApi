const supertest = require('supertest')
const app = require('../app.js');


// testing login request
describe("POST /api/auth/login", () => {

    describe("given a right email and password", () => {
        //should respond a non-null token
        //sould respond a status code 200
        test("sould respond a status code 200 and return a json object", async () => {
            await supertest(app)
            .post('/api/auth/login')
            .send({
                email: 'test@test.com',
                password: 'PassWord!0'
            })
            .expect(200)
        });
    });

    describe("given bad email", () => {
        //sould respond nothing
        //sould respond a status code 404 not found
        test("sould respond a status code 404 and return a json object", async () => {
            await supertest(app)
            .post('/api/auth/login')
            .send({
                email: 'test@tt.com',
                password: 'PassWord!0'
            })
            .expect(404)
        });
    });

    describe("given bad password", () => {
        //sould respond nothing
        //sould respond a status code 401 unauthorized
        test("sould respond a status code 401", async () => {
            await supertest(app)
            .post('/api/auth/login')
            .send({
                email: 'test@test.com',
                password: 'PassWord!'
            })
            .expect(401)
        });
    });
});