class MapSum {
  private list: Map<string, number>

  constructor() {
    this.list = new Map()
  }

  insert(key: string, val: number): void {
    this.list.set(key, val)
  }

  sum(prefix: string): number {
    let sum = 0;
    for (let key of this.list.keys()) {
      if (key.indexOf(prefix) === 0) {
        sum += this.list.get(key) || 0
      };
    }
    return sum;
  }
}

/**
* Your MapSum object will be instantiated and called as such:
* var obj = new MapSum()
* obj.insert(key,val)
* var param_2 = obj.sum(prefix)
*/