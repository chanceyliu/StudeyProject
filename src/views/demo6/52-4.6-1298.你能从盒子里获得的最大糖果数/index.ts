function maxCandies(
  status: number[],
  candies: number[],
  keys: number[][],
  containedBoxes: number[][],
  initialBoxes: number[]
): number {
  const queue = initialBoxes;
  let ret = 0;
  for (let i = 0; i < queue.length; ++i) {
    ret += candies[queue[i]];
    for (const box of containedBoxes[queue[i]]) {
      status[box] === 1 ? queue.push(box) : (status[box] = -1);
    }
    for (const key of keys[queue[i]]) {
      status[key] === -1
        ? ((status[key] = 0), queue.push(key))
        : (status[key] = 1);
    }
  }
  return ret;
}
