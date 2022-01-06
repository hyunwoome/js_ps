const rangeSumBST = (root, low, high) => {
  let sum = 0;
  const traverse = (node) => {
    if (!node) return;
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    traverse(node.left);
    traverse(node.right);
  };
  traverse(root);
  return sum;
};

const root = [10, 5, 15, 3, 7, null, 18];
const low = 7;
const high = 15;
console.log(rangeSumBST(root, low, high));
