### 题目

```
给定一个较长字符串 big 和一个包含较短字符串的数组 smalls，设计一个方法，根据 smalls 中的每一个较短字符串，对 big 进行搜索。输出 smalls 中的字符串在 big 里出现的所有位置 positions，其中 positions[i]为 smalls[i]出现的所有位置。

示例：

输入：
big = "mississippi"
smalls = ["is","ppi","hi","sis","i","ssippi"]
输出： [[1,4],[8],[],[3],[1,4,7,10],[5]]
提示：

0 <= len(big) <= 1000
0 <= len(smalls[i]) <= 1000
smalls 的总字符数不会超过 100000。
你可以认为 smalls 中没有重复字符串。
所有出现的字符均为英文小写字母。

```

### 思路

（此处撰写思路）

### 代码

```typescript
class treeNode {
  public val: any;
  public children: Record<any, any>;

  constructor(value?: any) {
    this.val = value;
    this.children = {};
  }
}

function multiSearch(big: string, smalls: string[]): number[][] {
  const res: number[][] = smalls.map(() => []);
  if (!big) {
    return res;
  }
  let tree = new treeNode();
  let now;
  smalls.forEach((small, index) => {
    now = tree;
    for (let i = 0; i < small.length; i++) {
      if (!now.children[small[i]]) {
        now.children[small[i]] = new treeNode(small[i]);
      }
      now = now.children[small[i]];
    }
    now.children["last"] = index;
  });

  for (let i = 0; i < big.length; i++) {
    let now = tree;
    for (let j = i; j < big.length; j++) {
      if (!now.children[big[j]]) {
        break;
      }
      now = now.children[big[j]];
      if (now.children.last !== undefined) {
        res[now.children.last].push(i);
      }
    }
  }
  return res;
}
```

**复杂度分析**

- 时间复杂度：O()
- 空间复杂度：O()
