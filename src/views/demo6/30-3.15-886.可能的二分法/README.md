### 题目

```
给定一组 N 人（编号为 1, 2, ..., N）， 我们想把每个人分进任意大小的两组。

每个人都可能不喜欢其他人，那么他们不应该属于同一组。

形式上，如果 dislikes[i] = [a, b]，表示不允许将编号为 a 和 b 的人归入同一组。

当可以用这种方法将每个人分进两组时，返回 true；否则返回 false。



示例 1：

输入：N = 4, dislikes = [[1,2],[1,3],[2,4]]
输出：true
解释：group1 [1,4], group2 [2,3]
示例 2：

输入：N = 3, dislikes = [[1,2],[1,3],[2,3]]
输出：false
示例 3：

输入：N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
输出：false


提示：

1 <= N <= 2000
0 <= dislikes.length <= 10000
dislikes[i].length == 2
1 <= dislikes[i][j] <= N
dislikes[i][0] < dislikes[i][1]
对于dislikes[i] == dislikes[j] 不存在 i != j

```

### 思路

（此处撰写思路）

### 代码

```typescript
const p = new Array<number>(4010).fill(0);
function find(x: number): number {
  if (p[x] != x) p[x] = find(p[x]);
  return p[x];
}
function union(a: number, b: number): void {
  p[find(a)] = p[find(b)];
}
function query(a: number, b: number): boolean {
  return find(a) == find(b);
}

function possibleBipartition(n: number, dislikes: number[][]): boolean {
  for (let i = 1; i <= 2 * n; i++) p[i] = i;
  for (const info of dislikes) {
    const a = info[0],
      b = info[1];
    if (query(a, b)) return false;
    union(a, b + n);
    union(b, a + n);
  }
  return true;
}
```

**复杂度分析**

- 时间复杂度：O(n)
- 空间复杂度：O(n)
