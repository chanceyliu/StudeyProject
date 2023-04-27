### 题目

```
实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

示例:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple"); // 返回 true
trie.search("app"); // 返回 false
trie.startsWith("app"); // 返回 true1
trie.insert("app");
trie.search("app"); // 返回 true
说明:

你可以假设所有的输入都是由小写字母 a-z 构成的。
保证所有输入均为非空字符串。

```

### 思路

（此处撰写思路）

### 代码

```typescript
class Trie {
  private children: any;

  constructor() {
    this.children = {};
  }

  insert(word: string): void {
    let node = this.children;
    for (const ch of word) {
      if (!node[ch]) {
        node[ch] = {};
      }
      node = node[ch];
    }
    node.isEnd = true;
  }

  searchPrefix(prefix: string): any {
    let node = this.children;
    for (const ch of prefix) {
      if (!node[ch]) {
        return false;
      }
      node = node[ch];
    }
    return node;
  }

  search(word: string): boolean {
    const node = this.searchPrefix(word);
    return node !== undefined && node.isEnd !== undefined;
  }

  startsWith(prefix: string): boolean {
    return this.searchPrefix(prefix);
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

```

**复杂度分析**

- 时间复杂度：O() 
- 空间复杂度：O()
