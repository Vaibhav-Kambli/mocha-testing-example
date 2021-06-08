const assert = require("chai").assert;
const { sayHello, addNums } = require("../app");

let sayHellRes = sayHello();
let addNumsRes = addNums(2, 4);

describe("App", () => {
	describe("sayHello()", () => {
		// test return value of sayHello function
		it("app should return Hello", () => {
			assert.equal(sayHellRes, "Hello");
		});
		// test if return value is type of string
		it("sayHello function should return type of string", () => {
			assert.typeOf(sayHellRes, "string");
		});
	});

	describe("addNums()", () => {
		// test if addNums function returns value above the specified test value
		it("addNums should return value above 5", () => {
			assert.isAbove(addNumsRes, 5);
		});
		// test if return value of addNums is type Of number
		it("addNNums function should return type of number", () => {
			assert.typeOf(addNumsRes, "number");
		});
	});
});
