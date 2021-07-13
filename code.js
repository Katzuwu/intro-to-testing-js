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