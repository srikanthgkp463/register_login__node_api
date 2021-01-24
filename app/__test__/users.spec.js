const supertest = require('supertest');
const app = require('../../server');

describe("Testing the Lantronix API", () => {

    it("registration end point", async () => {
		const response = await supertest(app).post('http://localhost:4001/user/register');
		expect(response.statuscode).toBe(200);
		expect(response.body).toHaveProperty('message');

	});

    it("Login end point", async () => {

		const response = await supertest(app).post('http://localhost:4001/user/login');
		expect(response.statuscode).toBe(200);

	});
});