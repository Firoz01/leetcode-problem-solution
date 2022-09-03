var candy = function (ratings) {
   if (ratings === null || ratings.length === 0) return ratings;
  length = ratings.length;
  let candy = new Array(length);
  for (let i = 0; i < length; i++) candy[i] = 1;

  for (let i = 1; i < length; i++) {
    if (ratings[i] > ratings[i - 1] && ratings[i] > ratings[i + 1]) {
      candy[i] = candy[i - 1] + 1;
    }
  }

  for (let i = length - 2; i >= 0; i--){
    if (ratings[i] > ratings[i + 1]) {
      candy[i] = Math.max(candy[i], candy[i + 1] + 1);
    }
  }

  
  return (totalCandy = candy.reduce((partialSum, a) => partialSum + a, 0));
};

const input = [29, 51, 87, 87, 72, 12];
console.log(candy(input));
