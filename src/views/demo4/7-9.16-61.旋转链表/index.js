/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 数组转链表
const getListFromArray = (a) => {
  let dummy = new ListNode()
  let pre = dummy;
  a.forEach(x => pre = pre.next = new ListNode(x));
  return dummy.next;
}
const a = getListFromArray([1, 2, 3, 4, 5])
console.log(a);


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || !k) return head;
  let len = 1, cur = head;
  while (cur.next) {
    cur = cur.next;
    len++;
  }
  let move = len - k % len;
  cur.next = head;
  while (move) {
    cur = cur.next;
    move--;
  }
  let ans = cur.next;
  cur.next = null;
  return ans;
};

console.log(rotateRight(a, 2));