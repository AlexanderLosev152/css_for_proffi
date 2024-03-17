function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY;
  for (let num of nums) {
    if (num > max_num) {
      max_num = num;
    }
  }
  return max_num;
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(find_max(arr));
