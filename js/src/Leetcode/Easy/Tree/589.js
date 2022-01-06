/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root, ans = []) {
  if (!root) return ans;
  ans.push(root.val);
  for (let child of root.children) preorder(child, ans);
  return ans;
};

const root = [1, null, 3, 2, 4, null, 5, 6];
console.log(preorder(root));
