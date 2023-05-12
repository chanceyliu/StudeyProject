### 题目

```
给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

示例 1:

输入:
"tree"

输出:
"eert"

解释:
'e'出现两次，'r'和't'都只出现一次。
因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
示例 2:

输入:
"cccaaa"

输出:
"cccaaa"

解释:
'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
注意"cacaca"是不正确的，因为相同的字母必须放在一起。
示例 3:

输入:
"Aabb"

输出:
"bbAa"

解释:
此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
注意'A'和'a'被认为是两种不同的字符。

```

### 思路

（此处撰写思路）

### 代码

```typescript
function frequencySort(s: string): string {
  const map = new Map();
  const length = s.length;
  for (let i = 0; i < length; i++) {
    const c = s[i];
    const frequency = (map.get(c) || 0) + 1;
    map.set(c, frequency);
  }
  const list = [...map.keys()];
  list.sort((a, b) => map.get(b) - map.get(a));
  const sb = [];
  const size = list.length;
  for (let i = 0; i < size; i++) {
    const c = list[i];
    const frequency = map.get(c);
    for (let j = 0; j < frequency; j++) {
      sb.push(c);
    }
  }
  return sb.join('');
};
```

**复杂度分析**

- 时间复杂度：O() 
- 空间复杂度：O()
