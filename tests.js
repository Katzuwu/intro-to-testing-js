// Unit tests for the helloWorld function
describe('helloWorld', function() {
	it('should be a defined function', function() {
		expect(typeof helloWorld).toBe('function');
	});
	it('should return a string when called', function() {
		expect(typeof helloWorld()).toBe("string");
	});
	it('should return the string "Hello, World!" when executed', function() {
		expect(helloWorld()).toBe("Hello, World!");
	});
	it("should never return 'undefined' when called", function() {
		expect(helloWorld()).not.toBe(undefined);
	});
});

describe('sayHello', function () {
	it('should be a defined function', function (){
		expect(typeof sayHello).toBe('function');
	});
	it('should return a string when called', function (){
		expect(typeof sayHello()).toBe('string');
	});
	it('should return "Hello, Jane" when executed', function (){
		expect(sayHello("Jane")).toBe('Hello, Jane!');
	});
	it('should return "Hello, Alex!" when Alex is used', function (){
		expect(sayHello("Alex")).toBe("Hello, Alex!");
	});
	it('should return "Hello, Pat!" when Pat is used', function (){
		expect(sayHello("Pat")).toBe('Hello, Pat!');
	});
	it('should return "Hello, World!" when undefined', function (){
		expect(sayHello()).toBe("Hello, World!");
	});
	it('should return "Hello, World!" when true is used', function (){
		expect(sayHello(true)).toBe("Hello, World!");
	});
	it('should return "Hello, World!" when true is used', function (){
		expect(sayHello(false)).toBe("Hello, World!");
	});
})

describe('isFive', function (){
	it('should be a function', function (){
		expect(typeof isFive).toBe('function');
	});
	it('should return a boolean value', function (){
		expect(typeof isFive()).toBe('boolean');
	});
	it('should return true when 5 is passed', function (){
		expect(isFive(5)).toBe(true);
	});
	it('should return true when "5" is passed', function (){
		expect(isFive('5')).toBe(true);
	});
});

describe('isEven', function (){
	it('should be a function', function (){
		expect(typeof isEven).toBe('function');
	});
	it('should return a boolean value', function (){
		expect(typeof isEven()).toBe('boolean');
	});
	it('should return true when 2 is passed', function (){
		expect(isEven(2)).toBe(true);
	});
	it('should return false when 3 is passed', function (){
		expect(isEven(3)).toBe(false);
	});
	it('should return false when a string is used', function () {
		expect(isEven('banana')).toBe(false);
	});
	it('should return false when Infinity is called', function () {
		expect(isEven(Infinity)).toBe(false);
	});
	it('should return false when a boolean is passed', function () {
		expect(isEven(false)).toBe(false);
	});
	it('should return false when nothing is passed', function () {
		expect(isEven()).toBe(false);
	});
});

describe('isVowel', function(){
	it('should be a function', function () {
		expect(typeof isVowel).toBe('function');
	});
	it('should return a boolean value', function () {
		expect(typeof isVowel()).toBe('boolean');
	});
	it('should return true when "a" is passed', function () {
		expect(isVowel("a")).toBe(true);
	});
	it('should return true when "A" is passed', function () {
		expect(isVowel("A")).toBe(true);
	});
	it('should return false when a non vowel letter is passed', function () {
		expect(isVowel("y")).toBe(false);
	});
	it('should return false when a number is passed', function () {
		expect(isVowel(4)).toBe(false);
	});
	it('should return false when nothing is passed', function () {
		expect(isVowel()).toBe(false);
	});
	it('should should return false when true or false are passed', function () {
		expect(isVowel(true)).toBe(false);
	});
	it('should return false when a string is passed', function () {
		expect(isVowel('banana')).toBe(false);
	});
});

describe('add', function (){
	it('should be a function', function () {
		expect(typeof add).toBe('function');
	});
	it('should return a number', function () {
		expect(typeof add()).toBe('number');
	});
	it('should add two numbers together', function () {
		expect(add(2, 3)).toBe(5);
	});
	it('should return NaN when two strings are entered', function () {
		expect(add('banana', 'split')).toBeNaN();
	});
})