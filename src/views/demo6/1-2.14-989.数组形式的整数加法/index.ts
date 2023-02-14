function addToArrayForm(num: number[], k: number): number[] {
  let res: number[] = [];
  for (let i = num.length - 1; i >= 0; i--) {
    let sum = num[i] + (k % 10);
    // 给k消位
    k = Math.floor(k / 10);
    // 有进位
    if (sum >= 10) {
      k++;
      sum -= 10;
    }
    console.log(sum);
    res.push(sum);
  }
  for (; k > 0; k = Math.floor(k / 10)) {
    res.push(k % 10);
  }
  return res.reverse();
}

console.log(addToArrayForm([1, 2, 0, 0], 34));
