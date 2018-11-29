/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
 
  const toString = node => {
    if (!node) return '';
    return `+${node.val},${toString(node.left)},${toString(node.right)}-`
  }
  
  let sToString = toString(s);
  let tToString = toString(t);
  return sToString.includes(tToString);
};
