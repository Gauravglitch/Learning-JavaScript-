function main() {
    const N = parseInt(readLine().trim(), 10);
    if(N%2!=0) console.log('Weird');//N%2==0 means even and not true for odd
    else if(N%2==0 && (N>=2 && N<=5)) console.log('Not Weird');
    //in inclusive range, for [2 - 5] means {2,3,4,5}
     // in exclusive range, for (2 - 5) means{3,4}
    else if(N%2==0 && (N>=6 && N<=20)) console.log('Weird');
    else if(N%2==0 && N>20) console.log('Not Weird');
    else console.log('Invalid');
}