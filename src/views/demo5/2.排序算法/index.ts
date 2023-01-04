/**
 * 1.冒泡排序
 * 主要就是搞清楚外面的两层循环，和内部的换位置原理就能很快写出来
 */
export const bubble = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    return arr;
  }

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};
