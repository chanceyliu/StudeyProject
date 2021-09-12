/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
function addToArrayForm(num, k) {
  const res = [];
  for (let i = num.length - 1; i >= 0; i--) {
    // 从数组末尾开始加k的最后一位
    let sum = num[i] + (k % 10);
    // 加完后剔除k的最后一位
    k = Math.floor(k / 10);
    // 如果sum大于10说明需要进一位，于是将操作后的k+1，并让sum保留一位
    if (sum >= 10) {
      k++;
      sum -= 10;
    }
    res.push(sum);
  }
  // 如果k大于0的话，会进这个循环，说明还有进位没加，将进位push进数组
  for (; k > 0; k = Math.floor(k / 10)) {
    res.push(k % 10);
  }
  res.reverse();
  return res;
}

addToArrayForm([1, 2, 0, 9], 2000);
