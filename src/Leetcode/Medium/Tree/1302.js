function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const deepestLeavesSum = function (root) {
  let sum = [];

  const dfs = (node, level) => {
    if (level === sum.length) { sum[level] = node.val; }
    else { sum[level] += node.val; }
    if (node.left) dfs(node.left, level + 1);
    if (node.right) dfs(node.right, level + 1);
  }
  dfs(root, 0);
  return sum[sum.length - 1];
};

const node8 = new TreeNode(8);
const node6 = new TreeNode(6, null, node8);
const node3 = new TreeNode(3, null, node6);
const node7 = new TreeNode(7);
const node4 = new TreeNode(4, node7, null);
const node5 = new TreeNode(5);
const node2 = new TreeNode(2, node4, node5);
const node1 = new TreeNode(1, node2, node3);
console.log(deepestLeavesSum(node1));


