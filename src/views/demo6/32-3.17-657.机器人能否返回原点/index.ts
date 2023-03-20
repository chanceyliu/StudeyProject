function judgeCircle(moves: string): boolean {
  let table = {
    U: 0,
    D: 0,
    R: 0,
    L: 0,
  };
  for (let move of moves) {
    table[move]++;
  }
  return table["U"] == table["D"] && table["R"] == table["L"];
}
