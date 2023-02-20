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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (k === 0 || !head || !head.next) {
    return head;
  }
  let n = 1;
  let cur = head;
  while (cur.next) {
    cur = cur.next;
    n++;
  }

  let add = n - (k % n);
  if (add === n) {
    return head;
  }

  cur.next = head;
  while (add) {
    cur = cur.next as ListNode;
    add--;
  }

  const ret = cur.next;
  cur.next = null;
  return ret;
}
