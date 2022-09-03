var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  let mid;

  while (high >= low) {
    mid = Math.floor((low + high) / 2);

    if (target == nums[mid]) return mid;
    if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 0));
