function sortArray(nums: number[]): number[] {
  const n = nums.length;
  for (let i = 1; i < n; ++i) {
    let j = i - 1;
    const tmp = nums[i];
    while (j >= 0 && tmp < nums[j]) {
      nums[j + 1] = nums[j];
      --j;
    }
    nums[j + 1] = tmp;
  }
  return nums;
}
