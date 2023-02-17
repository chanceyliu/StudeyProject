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

console.log(decodeString("11[ad]"));
