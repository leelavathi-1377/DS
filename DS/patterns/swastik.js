const swastikPattern = (n) => {
    let str = "";
    let mid = Math.floor(n / 2);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === mid || j === mid || (i === 0 && j >= mid) || (i === n - 1 && j <= mid) || (j === 0 && i <= mid) || (j === n - 1 && i >= mid)){
                str = str + "* ";
            } else {
                str = str + "  "; 
            }
        }
        str = str + "\n";
    }
    console.log(str);
}

swastikPattern(9);
