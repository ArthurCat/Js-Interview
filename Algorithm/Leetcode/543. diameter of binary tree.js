/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let result = 0;
  if(!root) {
    return result;
  }
  const dfs = node => {
    if (!node) {
      return 0;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    result = Math.max(result, left + right);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return result;
};
