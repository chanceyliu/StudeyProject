### 题目

```
给定一个二叉树，在树的最后一行找到最左边的值。

示例 1:

输入:

    2
   / \
  1   3

输出:
1


示例 2:

输入:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

输出:
7

```

### 思路

（此处撰写思路）

### 代码

```typescript
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function findBottomLeftValue(root: TreeNode | null): number {
  let curVal = 0;
  const dfs = (root: TreeNode | null, height: number) => {
    if (!root) {
      return;
    }
    height++;
    dfs(root.left, height);
    dfs(root.right, height);
    if (height > curHeight) {
      curHeight = height;
      curVal = root.val;
    }
  };

  let curHeight = 0;
  dfs(root, 0);
  return curVal;
}
```

**复杂度分析**

- 时间复杂度：O(n)
- 空间复杂度：O(n)
