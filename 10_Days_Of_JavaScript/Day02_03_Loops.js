function vowelsAndConsonants(s) {
    const vowels="aeiouAEIOU";
 for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) console.log(s[i]);
    }

    for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s[i])) console.log(s[i]);
    }
      }
function main() {
    const s = readLine();        
    vowelsAndConsonants(s);
    }