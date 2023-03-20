function minCharacters(a: string, b: string): number {
  let da = new Array(26).fill(0);
  let db = new Array(26).fill(0);
  for (let i in a as any) {
    da[a.charCodeAt(+i) - 97]++;
  }
  for (let i in b as any) {
    db[b.charCodeAt(+i) - 97]++;
  }
  let an = a.length,
    bn = b.length,
    aSum = 0,
    bSum = 0,
    res = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < 25; i++) {
    aSum += da[i];
    bSum += db[i];
    res = Math.min(
      res,
      an + bn - da[i] - db[i],
      an - aSum + bSum,
      bn - bSum + aSum
    );
  }
  return Math.min(res, an + bn - da[25] - db[25]);
}
