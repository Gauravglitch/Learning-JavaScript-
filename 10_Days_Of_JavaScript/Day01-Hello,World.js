// print Hello World
console.log("Hello, World!");
// function that prints the parameter
function greeting(parameter){
    console.log(parameter);
}
//main function
function main() {
    // declaring constant parameter which will take input string
    const parameter = readLine();
    // function call;
    greeting(parameter);
}