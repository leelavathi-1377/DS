function reverseStringPreserveSpecialCharacters(S) {
    const alphabetRegex = /[A-Za-z]/;
    const alphabets = [];
    const specialChars = [];
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
      if (alphabetRegex.test(char)) {
        alphabets.push(char);
      } else {
        specialChars.push(char);
      }
    }
  
    alphabets.reverse();
    let result = '';
    let alphabetIndex = 0;
    let specialCharIndex = 0;
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
      if (alphabetRegex.test(char)) {
        result += alphabets[alphabetIndex];
        alphabetIndex++;
      } else {
        result += specialChars[specialCharIndex];
        specialCharIndex++
      }
      
    }
    return result;
}
const inputString = "ab-cd!";
const result = reverseStringPreserveSpecialCharacters(inputString);
console.log(result);
  