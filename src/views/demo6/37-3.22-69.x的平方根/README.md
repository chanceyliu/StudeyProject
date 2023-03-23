### 题目

```
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842...,
  由于返回类型是整数，小数部分将被舍去

```

### 思路

（此处撰写思路）

### 代码

```typescript
function mySqrt(x: number): number {
  // 整数x的平方根一定是在1到x的范围内
  let left = 1;
  let right = x;
  while (left <= right) {
    // 中间值  下面这样写是防止溢出
    let mid = left + ((right - left) >> 1);
    // 判断mid的平方是否小于或等于x，如果mid的平方小于x
    if (mid <= x / mid) {
      // 判断(mid+1)的平方是否大于x，如果(mid+1)的平方大于x，那么mid就是x的平方根
      if (mid + 1 > x / (mid + 1)) {
        return mid;
      }
      // 如果mid的平方小于x并且(mid+1)的平方小于x，那么x的平方根比mid大，接下来搜索从mid+1到x的范围
      left = mid + 1;
    } else {
      // 如果mid的平方大于x，则x的平方根小于mid，接下来搜索1到mid-1的范围
      right = mid - 1;
    }
  }
  // 如果输入参数是0，left等于1而right等于0，就直接返回0
  return 0;
}
```

**复杂度分析**

- 时间复杂度：O(logn)
- 空间复杂度：O(1)
