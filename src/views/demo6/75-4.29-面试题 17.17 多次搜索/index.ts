class treeNode {
  public val: any
  public children: Record<any, any>

  constructor(value?: any) {
    this.val = value
    this.children = {}
  }
}

function multiSearch(big: string, smalls: string[]): number[][] {
  const res: number[][] = smalls.map(() => [])
  if (!big) {
    return res
  }
  let tree = new treeNode()
  let now;
  smalls.forEach((small, index) => {
    now = tree;
    for (let i = 0; i < small.length; i++) {
      if (!now.children[small[i]]) {
        now.children[small[i]] = new treeNode(small[i])
      }
      now = now.children[small[i]]
    }
    now.children['last'] = index
  })

  for (let i = 0; i < big.length; i++) {
    let now = tree;
    for (let j = i; j < big.length; j++) {
      if (!now.children[big[j]]) {
        break
      }
      now = now.children[big[j]]
      if (now.children.last !== undefined) {
        res[now.children.last].push(i)
      }
    }
  }
  return res
};