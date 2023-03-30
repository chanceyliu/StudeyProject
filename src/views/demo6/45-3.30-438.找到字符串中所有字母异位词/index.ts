function findAnagrams(s: string, p: string): number[] {
  const sLen = s.length,
    pLen = p.length;

  if (sLen < pLen) {
    return [];
  }

  const ans: number[] = [];
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < pLen; ++i) {
    ++sCount[s[i].charCodeAt(0) - "a".charCodeAt(0)];
    ++pCount[p[i].charCodeAt(0) - "a".charCodeAt(0)];
  }

  if (sCount.toString() === pCount.toString()) {
    ans.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
    --sCount[s[i].charCodeAt(0) - "a".charCodeAt(0)];
    ++sCount[s[i + pLen].charCodeAt(0) - "a".charCodeAt(0)];

    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1);
    }
  }

  return ans;
}
