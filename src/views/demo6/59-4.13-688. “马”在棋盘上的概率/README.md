### 题目

```
已知一个 NxN 的国际象棋棋盘，棋盘的行号和列号都是从 0 开始。即最左上角的格子记为 (0, 0)，最右下角的记为 (N-1, N-1)。

现有一个 “马”（也译作 “骑士”）位于 (r, c) ，并打算进行 K 次移动。

如下图所示，国际象棋的 “马” 每一步先沿水平或垂直方向移动 2 个格子，然后向与之相垂直的方向再移动 1 个格子，共有 8 个可选的位置。


现在 “马” 每一步都从可选的位置（包括棋盘外部的）中独立随机地选择一个进行移动，直到移动了 K 次或跳到了棋盘外面。

求移动结束后，“马” 仍留在棋盘上的概率。

```

### 思路

（此处撰写思路）

### 代码

```typescript
const dirs = [
  [-2, -1],
  [-2, 1],
  [2, -1],
  [2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
];

function knightProbability(
  n: number,
  k: number,
  row: number,
  column: number
): number {
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));
  for (let step = 0; step <= k; step++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (step === 0) {
          dp[step][i][j] = 1;
        } else {
          for (const dir of dirs) {
            const ni = i + dir[0],
              nj = j + dir[1];
            if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
              dp[step][i][j] += dp[step - 1][ni][nj] / 8;
            }
          }
        }
      }
    }
  }
  return dp[k][row][column];
}
```

**复杂度分析**

- 时间复杂度：O(1)
- 空间复杂度：O(1)
