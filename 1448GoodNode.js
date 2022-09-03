var goodNodes = function (root) {
  let count = 0;
  function traverse(node, prevMax) {
    if (node === null) return;
    if (node.val >= prevMax) count += 1;

    prevMax = Math.max(node.val, prevMax);

    traverse(node.left, prevMax);
    traverse(node.right, prevMax);
  }
  if (root !== null) {
    traverse(root, root.val);
  }
  return count;
};

var goodNodes = function (root) {
  var count = 0;

  function traverse(node, prevMax) {
    if (node === null) return;
    if (node.val >= prevMax) count += 1;

    prevMax = Math.max(node.val, prevMax);

    traverse(node.left, prevMax);
    traverse(node.right, prevMax);
  }

  if (root !== null) {
    traverse(root, root.val);
  }
};
