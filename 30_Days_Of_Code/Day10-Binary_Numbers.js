// converts decimal number to binary and prints the count of no. of max ones in it
function main() {
    const n = parseInt(readLine().trim(), 10);//need to specify the radix base
let binary = n.toString(2); // convert decimal to binary
let maxOnes = 0;
let currentOnes = 0;
for (let digit of binary) {
  if (digit === '1') {
    currentOnes++;
    maxOnes = Math.max(maxOnes, currentOnes);
  } else {
    currentOnes = 0;
  }
}
console.log(maxOnes);
    }
