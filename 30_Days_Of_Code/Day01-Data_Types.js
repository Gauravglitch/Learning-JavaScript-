function main() {
    // Declare one string,double and integer
    var i1 = 4
    var d1 = 4.0
    var s1 = "HackerRank "
    //declared variables to take integer,double and string as input
    var i2 = Number(readLine()) // Convert i2 to a number
    var d2 = Number(readLine())// Convert d2 to a number
    var s2 = String(readLine())
    

    // Printing the sums
    console.log(i1 + i2);
    console.log(parseFloat(d1 + d2).toFixed(1)); 
    console.log(s1 + s2);
}
