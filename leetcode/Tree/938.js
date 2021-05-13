var rangeSumBST = function (root, L, R) {
  var sum = 0;
  if (root == null) {
    return sum;
  }

  if (root.val > L) {
    sum += rangeSumBST(root.left, L, R);
  }
  if (root.val <= R && root.val >= L) {
    sum += root.val;
  }
  if (root.val < R) {
    sum += rangeSumBST(root.right, L, R);
  }

  return sum;
};

const root = [10, 5, 15, 3, 7, null, 18];
const low = 7;
const high = 15;
console.log(rangeSumBST(root, low, high));
