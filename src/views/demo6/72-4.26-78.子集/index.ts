function subsets(nums: number[]): number[][] {
  const ans: number[][] = [];
  const n = nums.length;
  for (let mask = 0; mask < 1 << n; ++mask) {
    const t: number[] = [];
    for (let i = 0; i < n; ++i) {
      if (mask & (1 << i)) {
        t.push(nums[i]);
      }
    }
    ans.push(t);
  }
  return ans;
}
