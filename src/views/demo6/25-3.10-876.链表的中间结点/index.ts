/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let n = 0;
  let cur = head;
  while (cur != null) {
    ++n;
    cur = cur.next;
  }
  let k = 0;
  cur = head;
  while (k < Math.trunc(n / 2)) {
    ++k;
    cur = cur?.next || null;
  }
  return cur;
}
