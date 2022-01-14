/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// var postorder = function (root) {};

// var postorder = function (root) {
//   const res = [];
//   traverse(root);
//   return res;

//   function traverse(node) {
//     if (!node) return;
//     for (const child of node.children) {
//       traverse(child);
//     }
//     res.push(node.val);
//   }
// };

var postorder = function (root, ans = []) {
  if (!root) return ans;
  for (const child of root.children) {
    postorder(child, ans);
  }
  ans.push(root.val);
  return ans;
};

const root = [1, null, 3, 2, 4, null, 5, 6];
console.log(postorder(root));
