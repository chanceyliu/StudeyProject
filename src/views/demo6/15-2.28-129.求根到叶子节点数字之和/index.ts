/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

function sumNumbers(root: TreeNode | null): number {
  // 结果
  let result: number = 0;
  // 临时数组
  let temp: number[] = [];

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    // 判断叶子节点，进行求和赋值
    if (!node.left && !node.right) {
      const strSum = temp.join("") + `${node.val}`;
      const numSum = Number(strSum);
      result += numSum;
      return;
    }
    // 普通节点纳入数组
    temp.push(node.val);
    if (node.left) {
      dfs(node.left);
    }
    if (node.right) {
      dfs(node.right);
    }
    // 只有当左右节点已经计算完成的时候，才进行回溯
    temp.pop();
  };

  dfs(root);

  return result;
}
