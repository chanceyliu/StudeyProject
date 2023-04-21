function canJump(nums: number[]): boolean {
  let rightmost = 0;
  for (let i = 0; i < nums.length; i++) {
    if (rightmost >= nums.length - 1) {
      return true;
    }
    if (i > rightmost) {
      return false;
    }
    rightmost = Math.max(rightmost, i + nums[i]);
  }
  return false;
}


console.log(canJump([2,3,1,1,4]));