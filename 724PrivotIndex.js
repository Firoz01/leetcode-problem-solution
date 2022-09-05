// var pivotIndex = function (nums) {
//   if (nums.length === null) return -1;
//   const sum = nums.reduce((total, item) => total + item, 0);
//   let left = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let item = nums[i];
//     let right = sum - left - item;
//     if (right === left) return i;
//     left += item;
//   }

//   return -1;
// };

var pivotIndex = function (nums) {
  if (nums.length === null) return -1;
  const sum = nums.reduce((total, item) => total + item, 0);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    let right = sum - left - item;
    if (left === right) return i;
    left += item;
  }
  return -1;
};

console.log(pivotIndex([2, 1, -1]));
