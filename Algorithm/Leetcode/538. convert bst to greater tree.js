/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0;
  const convert = node => {
    if(!node) {
      return;
    }
    convert(node.right);
    node.val += sum;
    sum = node.val;
    convert(node.left);
  }
  convert(root);
  return root;
};
