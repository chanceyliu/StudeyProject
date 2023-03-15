const p = new Array<number>(4010).fill(0);
function find(x: number): number {
  if (p[x] != x) p[x] = find(p[x]);
  return p[x];
}
function union(a: number, b: number): void {
  p[find(a)] = p[find(b)];
}
function query(a: number, b: number): boolean {
  return find(a) == find(b);
}

function possibleBipartition(n: number, dislikes: number[][]): boolean {
  for (let i = 1; i <= 2 * n; i++) p[i] = i;
  for (const info of dislikes) {
    const a = info[0],
      b = info[1];
    if (query(a, b)) return false;
    union(a, b + n);
    union(b, a + n);
  }
  return true;
}
