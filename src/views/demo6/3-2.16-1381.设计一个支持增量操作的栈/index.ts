export class CustomStack {
  private data: any[];
  private maxSize: number;

  constructor(maxSize: number) {
    this.data = [];
    this.maxSize = maxSize;
  }

  push(x: number): void {
    if (this.data.length < this.maxSize) {
      this.data.push(x);
    }
  }

  pop(): number {
    console.log(this.data);
    if (this.data.length === 0) {
      return -1;
    }
    return this.data.pop();
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < Math.min(k, this.data.length); i++) {
      this.data[i] += val;
    }
  }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
