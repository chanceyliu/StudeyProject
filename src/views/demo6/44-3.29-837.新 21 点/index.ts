function new21Game(n: number, k: number, maxPts: number): number {
  let dp = new Array(k + maxPts).fill(0);
  dp[n] = 1;
  for (let i = n - 1; i >= 0; i--) {
    if (i >= k && i <= n) {
      dp[i] = 1;
    }
    if (i < k) {
      for (let j = 1; j <= maxPts; j++) {
        if (i + j <= n) {
          dp[i] += dp[i + j] / maxPts;
        }
      }
    }
  }
  return dp[0];
}
