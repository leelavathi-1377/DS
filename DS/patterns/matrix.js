function printZigzagPattern(rows, cols) {
    for (let row = 1; row <= rows; row++) {
      let line = "";
      for (let col = row; col <= row + (cols - 1) * rows; col += rows) {
        line += col + " ";
      }
      console.log(line);
    }
  }
  
  const rows = 5;
  const cols = 5;
  printZigzagPattern(rows, cols);
  