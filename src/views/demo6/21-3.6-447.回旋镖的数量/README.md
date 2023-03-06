### 题目

```
给定平面上  n 对不同的点，“回旋镖” 是由点表示的元组  (i, j, k) ，其中  i  和  j  之间的距离和  i  和  k  之间的距离相等（需要考虑元组的顺序）。

找到所有回旋镖的数量。你可以假设  n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。

示例:


输入:
[[0,0],[1,0],[2,0]]

输出:
2

解释:
两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]

```

### 思路

（此处撰写思路）

### 代码

```typescript
function numberOfBoomerangs(points: number[][]): number {
  let ans = 0;
  for (const p of points) {
    const cnt = new Map();
    for (const q of points) {
      const dis = (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]);
      cnt.set(dis, (cnt.get(dis) || 0) + 1);
    }
    for (const [_, m] of cnt.entries()) {
      ans += m * (m - 1);
    }
  }
  return ans;
}
```

**复杂度分析**

- 时间复杂度：O(N \* N) 其中 N 为数组长度
- 空间复杂度：O(N)
