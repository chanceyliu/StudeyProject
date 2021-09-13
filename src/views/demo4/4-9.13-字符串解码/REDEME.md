### 题目

```
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。



示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"
示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"
示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
示例 4：

输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"

```

### 思路

从前往后遍历字符串，依次推入栈中，直到遇到 `]` ，就开始解析栈内的字符，直到遇到 `[` ，就代表字符解析完成了，前方可能有数字或字母，直到遇到非数字，将之前得到数字\*字符，得到解析后的字符，推入栈中，继续如此循环

### 代码

```javascript
/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
  let stack = [];
  for (const i of s) {
    // 只要值不等于 "]" ，就只做入栈操作
    if (i !== "]") {
      stack.push(i);
      continue;
    }
    // 出现 "]" 了，那么他上一个元素必然为字母，那么在遇到 "[" 之前都只做拼接字符串的操作
    let str = "";
    // 从栈中拿出一个
    let value = stack.pop();
    while (value !== "[") {
      str = value + str;
      // 拼接完后在拉一个出来
      value = stack.pop();
    }
    // 匹配到 "[" ，所以跳出了上一个循环，我们在拉一个覆盖掉 "["
    value = stack.pop();
    //出现 "[" 了，那么他前面的元素肯定是数字或者字母，是数字的话我们就要再次拼接
    let num = "";
    while (!isNaN(value)) {
      num = value + num;
      // 继续出栈
      value = stack.pop();
    }
    // 出现新的字母了，上面把它出栈了，现在重新把它装回去，等待再次拼装
    stack.push(value);
    // 将处理拼接后的字符推入栈中，继续循环
    stack.push(str.repeat(num));
  }
  return stack.join("");
}
```

**复杂度分析**

- 时间复杂度：$O(n)$，n 为转换后的字符串长度
- 空间复杂度：$O(n)$，
