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

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
