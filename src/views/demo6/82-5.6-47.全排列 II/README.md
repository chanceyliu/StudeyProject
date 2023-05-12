### 题目

```
给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:

输入: [1,1,2]
输出:
[[1,1,2],[1,2,1],[2,1,1] ]

```

### 思路

（此处撰写思路）

### 代码

```typescript
function permuteUnique(nums: number[]): number[][] {
  const ans: number[][] = [];
  const vis = new Array(nums.length).fill(false);
  const backtrack = (idx: number, perm: number[]) => {
    if (idx === nums.length) {
      ans.push(perm.slice());
      return;
    }
    for (let i = 0; i < nums.length; ++i) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue;
      }
      perm.push(nums[i]);
      vis[i] = true;
      backtrack(idx + 1, perm);
      vis[i] = false;
      perm.pop();
    }
  }
  nums.sort((x, y) => x - y);
  backtrack(0, []);
  return ans;

};s
```

**复杂度分析**

- 时间复杂度：O()
- 空间复杂度：O()
