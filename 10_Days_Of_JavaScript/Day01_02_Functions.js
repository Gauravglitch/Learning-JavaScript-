function factorial(n){
    if(n==0) return 1;
    else return (n)*factorial(n-1);
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}