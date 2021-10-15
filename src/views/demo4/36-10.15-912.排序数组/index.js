var sortArray = function (nums) {
  if (nums.length <= 1) return nums
  let left = []
  let right = []
  let pivotIndex = Math.floor(nums.length / 2)
  let pivotValue = nums.splice(pivotIndex, 1)[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivotValue) {
      right.push(nums[i])
    } else {
      left.push(nums[i])
    }
  }
  return sortArray(left).concat(pivotValue, sortArray(right))
};

