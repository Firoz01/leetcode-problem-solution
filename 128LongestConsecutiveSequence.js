var longestConsecutive = function (nums) {
  if (nums === null || nums.length === 0) return 0;
  let array = nums.sort((a, b) => a - b);

  let newArray = [...new Set(array)];
  let count = [];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i + 1] - newArray[i] === 1) {
      count[i]=0;
    } else {
      count.push(1)
    }
  }
  console.log(newArray)
  console.log (count);
};

longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6,-2]);
