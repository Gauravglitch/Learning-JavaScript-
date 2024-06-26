function main(){
     // trim removes whitespace from input, radix 10 specifies decimal parsing
    const n = parseInt(readLine().trim,10)
    //for loop
    for(let i=1;i<=10;i++){
        //// print multiplication table
        console.log(n+' x '+i+' = '+(n*i))
    }
}