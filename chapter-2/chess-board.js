function printChessBoard(size = 8) {
  let line = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      line += (i + j) % 2 === 0 ? " " : "#";
    }
    line += "\n";
  }
  return line;
}

console.log(printChessBoard());
