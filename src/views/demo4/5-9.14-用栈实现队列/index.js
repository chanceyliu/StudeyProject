// es6中js类的写法
class MyQueue {
  constructor() {
    this.intStack = [];
    this.outStack = [];
  }

  push(x) {
    this.intStack.push(x);
  }

  pop() {
    if (!this.outStack.length) {
      this.inToOut();
    }
    return this.outStack.pop();
  }

  peek() {
    if (!this.outStack.length) {
      this.inToOut();
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty() {
    return this.intStack.length === 0 && this.outStack.length === 0;
  }

  inToOut() {
    while (this.intStack.length) {
      this.outStack.push(this.intStack.pop());
    }
  }
}

// leetCode官方写法
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.intStack = [];
  this.outStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.intStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.outStack.length) {
    this.inToOut();
  }
  return this.outStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.outStack.length) {
    this.inToOut();
  }
  return this.outStack[this.outStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.intStack.length === 0 && this.outStack.length === 0;
};

/**
 * 用来将输入栈中的数据颠倒顺序装入输出栈中
 */
MyQueue.prototype.inToOut = function () {
  while (this.intStack.length) {
    this.outStack.push(this.intStack.pop());
  }
};
