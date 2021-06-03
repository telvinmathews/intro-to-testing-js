// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined || input === true || input === false || input === null || input === '' || input === typeof 3 || input === typeof [] || input === typeof "3") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}