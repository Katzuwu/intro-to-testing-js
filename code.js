// helloWorld function 
// function helloWorld() {
//      return "Hello, World!";
// }

var helloWorld = function () {
	return "Hello, World!";
}

function sayHello(input) {
	if(typeof input === 'string') {
		return "Hello, " + input + "!";
	} else if(typeof input === 'undefined'){
		return "Hello, World!";
	} else if(typeof input === 'boolean') {
		return "Hello, World!";
	}
}

function isFive(num){
	return num == 5;
}

function isEven(num){
	return typeof num === 'number' && num % 2 === 0;
}

function isVowel(x) {
	return ("aeiouAEIOU".indexOf(x) != -1);
}

function add(num1, num2){
	return parseFloat(num1) + parseFloat(num2);
}