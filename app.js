/**
 * @description function that returns string 'Hello'
 * @returns string 'Hello'
 */
const sayHello = () => {
	return "Hello";
};

/**
 * @description function to add two numbers
 * @param {*} val1 number
 * @param {*} val2 number
 * @returns number
 */
const addNums = (val1, val2) => {
	return val1 + val2;
};

module.exports = {
	sayHello,
	addNums,
};
