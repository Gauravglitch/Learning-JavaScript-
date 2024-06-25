//finding the second largest number from an array
function getSecondLargest(nums) {
    //sorting in descending order
  nums.sort((a, b) => b - a);
    //removes duplicates using Set
    nums = [...new Set(nums)];
    //removes the largest element using splice
    nums.splice(0,1);// remove 1 element starting from index 0
    // return the value of index 0
    return nums[0];
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);//takes string input separated by space then mapped to number
    console.log(getSecondLargest(nums));
}