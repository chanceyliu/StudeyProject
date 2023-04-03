### 题目

```
n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。


示例 1：
```

![](https://p.ipic.vip/e9jfjh.jpg)

```
输入：n = 4
输出：2
解释：如上图所示，4 皇后问题存在两个不同的解法。
示例 2：

输入：n = 1
输出：1


提示：

1 <= n <= 9
皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。

```

### 思路

（此处撰写思路）

### 代码

```typescript
const backtrack = (
  n: number,
  row: number,
  columns: Set<any>,
  diagonals1: Set<any>,
  diagonals2: Set<any>
) => {
  if (row === n) {
    return 1;
  } else {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (columns.has(i)) {
        continue;
      }
      const diagonal1 = row - i;
      if (diagonals1.has(diagonal1)) {
        continue;
      }
      const diagonal2 = row + i;
      if (diagonals2.has(diagonal2)) {
        continue;
      }
      columns.add(i);
      diagonals1.add(diagonal1);
      diagonals2.add(diagonal2);
      count += backtrack(n, row + 1, columns, diagonals1, diagonals2);
      columns.delete(i);
      diagonals1.delete(diagonal1);
      diagonals2.delete(diagonal2);
    }
    return count;
  }
};

function totalNQueens(n: number): number {
  const columns = new Set();
  const diagonals1 = new Set();
  const diagonals2 = new Set();
  return backtrack(n, 0, columns, diagonals1, diagonals2);
}
```

**复杂度分析**

- 时间复杂度：O(N!)
- 空间复杂度：O(N)
