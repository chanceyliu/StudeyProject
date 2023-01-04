const arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

const getChildren = (data, pid, res) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] };
      res.push(newItem);
      getChildren(data, newItem.id, newItem.children);
    }
  }
  return res;
};

/**
 * 扁平结构转树状结构
 * 递归很直观，容易理解，但是效率很低
 * @param data
 * @param pid 顶层父ID
 * @returns
 */

export const dataToTree = (data: any[], pid: string | number) => {
  let res: any[] = [];
  getChildren(data, pid, res);
  return res;
};

/**
 * 利用了引用类型的特性，修改map对象的同时改变了结果中的数据
 */

export const dataToTree2 = (data: any[], pid: string | number) => {
  let res: any = [];
  let map = {};

  data.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });

  for (const item of data) {
    // 操作对象基于map中的对象值，因为引用地址一致
    const newItem = map[item.id];
    if (item.pid === pid) {
      res.push(newItem);
    } else {
      // 这里是在给map中的引用对象赋值
      if (map[item.pid]) {
        map[item.pid].children.push(newItem);
      }
    }
  }

  return res;
};

/**
 * 树状结构转扁平数组
 * @param tree
 * @returns
 */
const treeToData = (tree: any[]) => {
  let res: any[] = [];
  for (const item of tree) {
    const { children, ...other } = item;
    if (children && children.length) {
      // 这里很关键，主要是要每次递归后记得将结果累加（concat）返回到原始数组中来
      res = res.concat(treeToData(tree));
    }
    res.push(other);
  }
  return res;
};
