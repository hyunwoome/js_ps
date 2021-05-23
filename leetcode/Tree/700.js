/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  while (root != null) {
    if (val < root.val) root = root.left;
    else if (val > root.val) root = root.right;
    else return root;
  }
  return root;
};

const root = [4, 2, 7, 1, 3];
const val = 2;
