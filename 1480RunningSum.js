var runningSum = function (nums) {
  for (i = 1; i < nums.length; i++) {
      nums[i] = nums[i] + nums[i - 1];
      console.log(nums[i]);
  }

  return nums;
};

const nums = [1, 2, 3, 4];

console.log(runningSum(nums))