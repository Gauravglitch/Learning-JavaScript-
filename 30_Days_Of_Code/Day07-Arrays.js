function main() {
    //need trim because the first input is the size
    const n = parseInt(readLine().trim(), 10);
    //converting the input number into array
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    //reverse function to reverse the array and join to remove the array but separated from blank space
    console.log( arr.reverse().join(" "))
}
