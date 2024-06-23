// Function to perform operations like sum of integers and floats and concatenation
function performOperation(secondInteger, secondDouble, secondString) {
    // Declaring values for all constants
    const firstInteger = 4;
    const firstDouble = 4.0;
    const firstString = 'Gaurav';

    // Printing the sums
    console.log(firstInteger + Number(secondInteger)); // Convert secondInteger to a number
    console.log(firstDouble + Number(secondDouble)); // Convert secondDouble to a number
    console.log(firstString + secondString);
}

function main() {
    // Taking value input from user
    const secondInteger = readLine();
    const secondDouble = readLine();
    const secondString = readLine();

    // Function call
    performOperation(secondInteger, secondDouble, secondString);
}
