function processData(input) {
    let inputCopy = input.split('\n').slice(1);
    inputCopy.forEach((str) => {
       let odd = '';
    let even = '';
        for (let i = 0; i < str.length; i++) {
            if (i % 2 === 0) {
                even += str[i];
            } else {
                odd += str[i];
            }
        }
        console.log(even + ' ' + odd);
    });
}