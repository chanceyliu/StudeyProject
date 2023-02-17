### 同类题

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

使用两个栈，分别存放重复次数和累加后的字符，针对特定的四种情况分别做处理，做好之前字符的记录工作，最后完成拼接

### 代码

```typescript
function decodeString(s: string): string {
  let numStack = [];
  let strStack: string[] = [];
  let num = 0;
  let result = "";

  for (const str of s) {
    // 是数字
    if (!isNaN(+str)) {
      num = +(num + str);
    } else if (str === "[") {
      // 是[，就是字符重复的开始，所以将之前的记录存档
      numStack.push(num);
      num = 0;
      strStack.push(result);
      result = "";
    } else if (str === "]") {
      // 是]，就准备收口，返回重复后的字符
      let report = numStack.pop();
      result = strStack.pop() + result.repeat(report as number);
    } else {
      // 是字符串，就要拼接起来
      result += str;
    }
  }

  return result;
}
```

**复杂度分析**

- 时间复杂度：O(n) n 为 s 字符长度
- 空间复杂度：O(n)
