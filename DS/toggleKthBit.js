const toggleKthBit = (num, k) => {
    const binary = num.toString(2);
    
    const binaryArray = binary.split('');
    
    if (binaryArray[binaryArray.length - k] === '1') {
        binaryArray[binaryArray.length - k] = '0';
    } else {
        binaryArray[binaryArray.length - k] = '1';
    }

    const resultBinary = binaryArray.join('');
    
    return parseInt(resultBinary, 2);
}

const num = 10;
console.log(toggleKthBit(num, 2));
