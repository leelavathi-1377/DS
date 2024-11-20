const printNumberUpto5 = (n) => {
    if(n == 5){
        return;
    }
    console.log(n)
    printNumberUpto5(n + 1);
}

printNumberUpto5(1)