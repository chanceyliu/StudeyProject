// 容易理解和想到的思路
// 空间换时间
function shortestToChar(s, c) {
  const temArr = [];

  // 记录所有c字符出现的下标位置
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      temArr.push(i);
    }
  }

  // 先将结果数组以最大值填充好，在接下来的遍历中，不断以小值替换掉
  const res = new Array(s.length).fill(Infinity);

  for (let i = 0; i < s.length; i++) {
    // 遇到c字符，填充为0
    if (s[i] === c) {
      res[i] = 0;
    }

    // 把每个字符都和我们的下标数组比较一下，取最小值
    for (const t of temArr) {
      const flag = Math.abs(t - i);

      // 因为下标数组是递增的，当遇到值比当前位置大的时候，那么后面就没必要比了
      if (flag >= res[i]) {
        break;
      }

      res[i] = flag;
    }
  }

  return res;
}

// 时间复杂度: O(N*K) N为s字符串长度，K为存储下标数组的长度
// 空间复杂度: O(K) K为存储下标数组的长度

var shortestToChar1 = function (S, C) {
  var res = [];

  // 第一次遍历：从左往右
  // 找到出现在左侧的 C 字符的最后下标
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) res[i] = i;
    // 如果左侧没有出现 C 字符的话，用 Infinity 进行标记
    else res[i] = res[i - 1] === undefined ? Infinity : res[i - 1];
  }

  // 第二次遍历：从右往左
  // 找出现在右侧的 C 字符的最后下标
  // 如果左侧没有出现过 C 字符，或者右侧出现的 C 字符距离更近，就更新 res[i]
  for (let i = S.length - 1; i >= 0; i--) {
    if (res[i] === Infinity || res[i + 1] - i < i - res[i]) res[i] = res[i + 1];
  }

  // 计算距离
  for (let i = 0; i < res.length; i++) {
    res[i] = Math.abs(res[i] - i);
  }
  return res;
};

console.log(shortestToChar1("loveleetcode", "e"));
