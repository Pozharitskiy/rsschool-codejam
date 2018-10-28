module.exports = function recursion(tree, arr, depth) {
  const globalArr = arr || [];
  const innerDepth = depth || 0;

  if (!tree) return null;
  if (!globalArr[innerDepth]) globalArr[innerDepth] = [];
  globalArr[innerDepth].push(tree.value);


  recursion(tree.left, globalArr, innerDepth + 1);
  recursion(tree.right, globalArr, innerDepth + 1);
  return globalArr;
};