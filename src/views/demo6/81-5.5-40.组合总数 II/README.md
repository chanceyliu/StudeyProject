### 题目

```
给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。
示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
[1, 7],
[1, 2, 5],
[2, 6],
[1, 1, 6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]

```

### 思路

（此处撰写思路）

### 代码

```typescript
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const resArr: number[][] = [];
  function backTracking(
    candidates: number[], target: number,
    curSum: number, startIndex: number, route: number[]
  ) {
    if (curSum > target) return;
    if (curSum === target) {
      resArr.push(route.slice());
      return;
    }
    for (let i = startIndex, length = candidates.length; i < length; i++) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }
      let tempVal: number = candidates[i];
      route.push(tempVal);
      backTracking(candidates, target, curSum + tempVal, i + 1, route);
      route.pop();

    }
  }
  backTracking(candidates, target, 0, 0, []);
  return resArr;
};
```

**复杂度分析**

- 时间复杂度：O() 
- 空间复杂度：O()
