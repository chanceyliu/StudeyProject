function maxChunksToSorted(arr) {
  let stack = []
  for (let i = 0; i < arr.length; i++) {
    // 如果栈为空，或者当前元素大于栈顶元素的时候，说明能划分为块，入栈
    if (!stack.length || arr[i] >= stack[stack.length - 1]) {
      stack.push(arr[i])
    } else {
      // 这里我们先把最大值推出来，上面已经比较过了，如果当前元素比栈顶元素大，直接就入栈了
      // 但是我们不能保证它比其他元素小，所以进来跟栈内其他元素比较
      let max = stack.pop()
      // 这里的逻辑是，我们的栈中存的都是每个分块中最大的元素
      // 如果当前元素比某个元素小的话，就会导致两个分块合并
      // 因为我们要找最大分块，所以如果相等的话就不用合并
      while (stack.length && stack[stack.length - 1] > arr[i]) {
        head = stack.pop()
      }
      stack.push(max)
    }
  }
  // 单调栈最终有多少个元素，就说明能分成多少块，因为我们能保证块中每一个元素都比前面的值小
  return stack.length
}

console.log(maxChunksToSorted([3, 2, 4, 5, 4]));
