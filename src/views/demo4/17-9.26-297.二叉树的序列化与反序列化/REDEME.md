### 题目

```
序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

示例:

你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"
提示: 这与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

说明: 不要使用类的成员 / 全局 / 静态变量来存储状态，你的序列化和反序列化算法应该是无状态的。

```

### 思路

参照官方题解
先 Mark，后再解题

### 代码

```javascript
var serialize = function (root) {
  return rserialize(root, "");
};

var deserialize = function (data) {
  const dataArray = data.split(",");
  return rdeserialize(dataArray);
};

const rserialize = (root, str) => {
  if (root === null) {
    str += "None,";
  } else {
    str += root.val + "" + ",";
    str = rserialize(root.left, str);
    str = rserialize(root.right, str);
  }
  return str;
};

const rdeserialize = (dataList) => {
  if (dataList[0] === "None") {
    dataList.shift();
    return null;
  }

  const root = new TreeNode(parseInt(dataList[0]));
  dataList.shift();
  root.left = rdeserialize(dataList);
  root.right = rdeserialize(dataList);

  return root;
};
```

**复杂度分析**

- 时间复杂度：O(N)
- 空间复杂度：O(N)
