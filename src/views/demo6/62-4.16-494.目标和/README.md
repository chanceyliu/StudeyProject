### 题目

```
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，target。现在你有两个符号  +  和  -。对于数组中的任意一个整数，你都可以从  +  或  -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 target 的所有添加符号的方法数。

```

示例：

输入：nums: [1, 1, 1, 1, 1], target: 3
输出：5
解释：

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有 5 种方法让最终目标和为 3。

```

```

### 思路

（此处撰写思路）

### 代码

```typescript
function findTargetSumWays(nums: number[], target: number): number {
  let count = 0;
  const backtrack = (nums, target, index, sum) => {
    if (index === nums.length) {
      if (sum === target) {
        count++;
      }
    } else {
      backtrack(nums, target, index + 1, sum + nums[index]);
      backtrack(nums, target, index + 1, sum - nums[index]);
    }
  };

  backtrack(nums, target, 0, 0);
  return count;
}
```

**复杂度分析**

- 时间复杂度：O(2n) 2 的 n 次方
- 空间复杂度：O(n)
