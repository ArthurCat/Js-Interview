/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let result = true;
  
  function traverse(list) {
    if (list) {
      traverse(list.next);
      if (list.val != head.val) {
        result = false;
        return;
      }
      head = head.next;
    }
  }
  traverse(head);
  return result;
};
