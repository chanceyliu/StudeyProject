/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = [];
  this.max = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.max) {
    this.stack.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.stack.length === 0) {
    return -1;
  }
  return this.stack.pop();
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  for (let i = 0; i < this.stack.length && i < k; i++) {
    this.stack[i] = this.stack[i] + val
  }
};


/**
 * es6写法
 */
class CustomStack {
  constructor(max) {
    this.stack = []
    this.maxSize = max
  }

  push(x) {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }

  pop() {
    const res = this.stack.pop()
    return res === void 0 ? -1 : res
  }

  increment(k, val) {
    for (let i = 0; i < this.stack.length && i < k; i++) {
      this.stack[i] += val
    }
  }
}

