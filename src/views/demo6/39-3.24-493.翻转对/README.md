### 题目

```
给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。

你需要返回给定数组中的重要翻转对的数量。

示例 1:

输入: [1,3,2,3,1]
输出: 2
示例 2:

输入: [2,4,3,5,1]
输出: 3
注意:

给定数组的长度不会超过50000。
输入数组中的所有数字都在32位整数的表示范围内。

```

### 思路

（此处撰写思路）

### 代码

```typescript
const reversePairsRecursive = (nums, left, right) => {
  if (left === right) {
    return 0;
  } else {
    const mid = Math.floor((left + right) / 2);
    const n1 = reversePairsRecursive(nums, left, mid);
    const n2 = reversePairsRecursive(nums, mid + 1, right);
    let ret = n1 + n2;

    let i = left;
    let j = mid + 1;
    while (i <= mid) {
      while (j <= right && nums[i] > 2 * nums[j]) {
        j++;
      }
      ret += j - mid - 1;
      i++;
    }

    const sorted = new Array(right - left + 1);
    let p1 = left,
      p2 = mid + 1;
    let p = 0;
    while (p1 <= mid || p2 <= right) {
      if (p1 > mid) {
        sorted[p++] = nums[p2++];
      } else if (p2 > right) {
        sorted[p++] = nums[p1++];
      } else {
        if (nums[p1] < nums[p2]) {
          sorted[p++] = nums[p1++];
        } else {
          sorted[p++] = nums[p2++];
        }
      }
    }
    for (let k = 0; k < sorted.length; k++) {
      nums[left + k] = sorted[k];
    }
    return ret;
  }
};

function reversePairs(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  return reversePairsRecursive(nums, 0, nums.length - 1);
}
```

**复杂度分析**

- 时间复杂度：O(N log N)
- 空间复杂度：O(N)
