function beautifulArray(n: number): number[] {
  if (n === 1) return [1];
  return [
    ...beautifulArray(Math.ceil(n / 2)).map((i) => 2 * i - 1),
    ...beautifulArray(Math.floor(n / 2)).map((i) => 2 * i),
  ];
}
