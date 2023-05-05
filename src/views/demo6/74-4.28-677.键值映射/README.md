### 题目

```
实现一个 MapSum 类里的两个方法，insert 和 sum。

对于方法 insert，你将得到一对（字符串，整数）的键值对。字符串表示键，整数表示值。如果键已经存在，那么原来的键值对将被替代成新的键值对。

对于方法 sum，你将得到一个表示前缀的字符串，你需要返回所有以该前缀开头的键的值的总和。

示例 1:

输入: insert("apple", 3), 输出: Null
输入: sum("ap"), 输出: 3
输入: insert("app", 2), 输出: Null
输入: sum("ap"), 输出: 5

```

### 思路

（此处撰写思路）

### 代码

```typescript
class MapSum {
  private list: Map<string, number>

  constructor() {
    this.list = new Map()
  }

  insert(key: string, val: number): void {
    this.list.set(key, val)
  }

  sum(prefix: string): number {
    let sum = 0;
    for (let key of this.list.keys()) {
      if (key.indexOf(prefix) === 0) {
        sum += this.list.get(key) || 0
      };
    }
    return sum;
  }
}
```

**复杂度分析**

- 时间复杂度：O() 
- 空间复杂度：O()
