var runningSum = function (nums) {
  if (nums === null || nums.length === 0) {
    return nums;
  }
  let length = nums.length;
  let outputArr = [];

  outputArr[0] = nums[0];
  for (let i = 1; i < length; i++) {
    outputArr[i] = outputArr[i - 1] + nums[i];
  }
  return outputArr;
};

const input = [1, 2, 3, 4];
runningSum(input);
