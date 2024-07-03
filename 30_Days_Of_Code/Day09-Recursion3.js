//recursive method for calculating factorial
function factorial(n) {
    if(n<=1) return 1;
    else return n*factorial(n-1);
}

function main() {
// Create a write stream to the output file
const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

// Read a line of input from the user
const n = parseInt(readLine().trim(), 10);

// Calculate the factorial of n
const result = factorial(n);

// Write the result to the output file
ws.write(result + '\n');

// Close the write stream
ws.end();
}