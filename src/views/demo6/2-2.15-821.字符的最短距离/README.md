### 同类题

### 题目

```

给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

示例 1:

输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
说明:

- 字符串 S 的长度范围为 [1, 10000]。
- C 是一个单字符，且保证是字符串 S 里的字符。
- S 和 C 中的所有字母均为小写字母。

```

### 思路

两次遍历，从前往后，在从后往前取最小距离

### 代码

```typescript
function shortestToChar(s: string, c: string): number[] {
  const n = s.length;
  const res = new Array(n).fill(0);

  for (let i = 0, idx = -n; i < n; i++) {
    if (s[i] === c) {
      idx = i;
    }
    res[i] = i - idx;
  }

  for (let i = n - 1, idx = 2 * n; i >= 0; i--) {
    if (s[i] === c) {
      idx = i;
    }
    res[i] = Math.min(res[i], idx - i);
  }

  return res;
}
```

**复杂度分析**

- 时间复杂度：O(N) 其中 N 为数组长度
- 空间复杂度：O(1)
