### 题目

```
使用栈实现队列的下列操作：

push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。
示例:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek(); // 返回 1
queue.pop(); // 返回 1
queue.empty(); // 返回 false
说明:

你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
假设所有操作都是有效的、 （例如，一个空的队列不会调用 pop 或者 peek 操作）。

```

### 思路

使用两个栈，一个用来放主栈中颠倒过后的数据，这样只用 POP 方法，我们就能移出栈底部的元素

### 代码

```typescript
class MyQueue {
  private intStack: any[];
  private outStack: any[];

  constructor() {
    this.intStack = [];
    this.outStack = [];
  }

  push(x: number): void {
    this.intStack.push(x);
  }

  pop(): number {
    if (!this.outStack.length) {
      while (this.intStack.length) {
        this.outStack.push(this.intStack.pop());
      }
    }
    return this.outStack.pop();
  }

  peek(): number {
    if (!this.outStack.length) {
      while (this.intStack.length) {
        this.outStack.push(this.intStack.pop());
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return !this.intStack.length && !this.outStack.length;
  }
}
```

**复杂度分析**

- 时间复杂度：push 和 empty 为 O(1)，pop 和 peek 为 O(n)
- 空间复杂度：O(n)
