/**
 * 链表节点
 */
export class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

/**
 * 数组转链表
 * @param {*} arr 
 * @returns 
 */
export const arrToList = (arr) => {
  let head = new ListNode()
  let pre = head
  arr.forEach(item => {
    item = pre.next = new ListNode(item)
  });
  return head.next
}
