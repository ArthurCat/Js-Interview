/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  return reverse(head, null); //recursively
};
function reverse(node, prev) {
  if (!node) {
  return node;
  }  
  let newHead = reverse(node.next, node) || node;    
  node.next = prev;
  return newHead;
}
/*
//iteratively 
  let prev = null;
  while (head) {
    [head.next, head, prev] = [prev, head.next, head];
  }
  return prev;
*/
