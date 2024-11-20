const removeWhiteSpaces = (s) => {
    return s.replace(/\s/g, '');
}

const s = "leela how are            you"
console.log(removeWhiteSpaces(s))