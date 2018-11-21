/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  const dfs = (m, n) => {
    if (!m && !n) {
      return true;
    }
    if ((!m && n) || (m && !n) || (m.val !== n.val)) {
      return false;
    }
    return dfs(m.left, n.right) && dfs(m.right, n.left);
  }
  return dfs(root.left, root.right);
};
