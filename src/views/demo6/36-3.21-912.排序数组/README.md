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

插入排序

### 代码

```typescript
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
```

**复杂度分析**

- 时间复杂度：平均 O(n²)、最好 O(n)、最坏 O(n²)
- 空间复杂度：O(1)
