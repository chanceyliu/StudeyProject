### 题目

```
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
示例 2：

输入：nums = [0]
输出：[[],[0]]
 

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10
nums 中的所有元素 互不相同

```

### 思路

（此处撰写思路）

### 代码

```typescript
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

```

**复杂度分析**

- 时间复杂度：O() 
- 空间复杂度：O()
