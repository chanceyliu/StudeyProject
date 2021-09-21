class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    let val = this.map.get(key);
    if (val === undefined) return -1;

    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }

  put(key, val) {
    if (this.map.has(key)) this.map.delete(key);

    this.map.set(key, val);

    if (this.map.size > this.capacity) {
      this.map.delete(this.map.entries().next().value[0]);
    }
  }
}
