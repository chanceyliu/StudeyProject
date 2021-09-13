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

decodeString("2[a2[c]]");
