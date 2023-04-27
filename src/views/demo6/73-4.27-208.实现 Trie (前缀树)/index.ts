class Trie {
  private children: any;

  constructor() {
    this.children = {};
  }

  insert(word: string): void {
    let node = this.children;
    for (const ch of word) {
      if (!node[ch]) {
        node[ch] = {};
      }
      node = node[ch];
    }
    node.isEnd = true;
  }

  searchPrefix(prefix: string): any {
    let node = this.children;
    for (const ch of prefix) {
      if (!node[ch]) {
        return false;
      }
      node = node[ch];
    }
    return node;
  }

  search(word: string): boolean {
    const node = this.searchPrefix(word);
    return node !== undefined && node.isEnd !== undefined;
  }

  startsWith(prefix: string): boolean {
    return this.searchPrefix(prefix);
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
