### 题目

```
给你一个整数数组 nums，请你将该数组升序排列。

示例 1：

输入：nums = [5,2,3,1]
输出：[1,2,3,5]
示例 2：

输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]


提示：

1 <= nums.length <= 50000
-50000 <= nums[i] <= 50000

```

### 思路

快排

### 代码

```javascript
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  let left = [];
  let right = [];
  let pivotIndex = Math.floor(nums.length / 2);
  let pivotValue = nums.splice(pivotIndex, 1)[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivotValue) {
      right.push(nums[i]);
    } else {
      left.push(nums[i]);
    }
  }
  return sortArray(left).concat(pivotValue, sortArray(right));
};
```

**复杂度分析**

- 时间复杂度：O(NlogN)
- 空间复杂度：O(logN)
