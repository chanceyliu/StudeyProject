export function shortestToChar(s: string, c: string): number[] {
  const n = s.length;
  const res = new Array(n).fill(0);

  // idx初始值是多少不重要，只是为了让值尽可能大而已
  for (let i = 0, idx = -n; i < n; i++) {
    // 不断的找到C的最新位置
    if (s[i] === c) {
      idx = i;
    }
    // 从前往后扫的过程中，在没找到C的位置前的数都是无效的
    // 有效的都是在C之后的，所以下标比C下标大
    res[i] = i - idx;
  }

  // 与上面相反的过程，这个过程中在不断取小值
  for (let i = n - 1, idx = 2 * n; i >= 0; i--) {
    if (s[i] === c) {
      idx = i;
    }
    res[i] = Math.min(res[i], idx - i);
  }

  return res;
}

console.log(shortestToChar("loveleetcodek", "e"));
