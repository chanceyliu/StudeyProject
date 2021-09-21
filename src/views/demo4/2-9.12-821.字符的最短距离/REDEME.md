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

遍历字符串，将目标值出现的下标存储起来，在对字符串进行遍历，同时遍历下标数组，计算差值，找出最小值

### 代码

```javascript
function shortestToChar(s, c) {
  const temArr = [];

  // 记录所有c字符出现的下标位置
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      temArr.push(i);
    }
  }

  // 先将结果数组以最大值填充好，在接下来的遍历中，不断以小值替换掉
  const res = new Array(s.length).fill(Infinity);

  for (let i = 0; i < s.length; i++) {
    // 遇到c字符，填充为0
    if (s[i] === c) {
      res[i] = 0;
    }

    // 把每个字符都和我们的下标数组比较一下，取最小值
    for (const t of temArr) {
      const flag = Math.abs(t - i);

      // 因为下标数组是递增的，当遇到值比当前位置大的时候，那么后面就没必要比了
      if (flag >= res[i]) {
        break;
      }

      res[i] = flag;
    }
  }

  return res;
}
```

**复杂度分析**

- 时间复杂度：O(N\*K) N 为 s 字符串长度，K 为存储下标数组的长度
- 空间复杂度：O(K) K 为存储下标数组的长度
