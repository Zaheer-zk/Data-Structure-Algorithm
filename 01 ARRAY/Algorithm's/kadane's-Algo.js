// Brute Force: O(n^2)
function bruteForce(nums) {
  let maxSum = nums[0];

  for (let L = 0; L < nums.length; L++) {
    let curSum = 0;
    for (let R = L; R < nums.length; R++) {
      curSum += nums[R];
      maxSum = Math.max(maxSum, curSum);
    }
  }
  return maxSum;
}

// Kadane's Algorithm: O(n)
function kadanes(nums) {
  let maxSum = nums[0];
  let curSum = 0;

  for (let n of nums) {
    curSum = Math.max(curSum, 0);
    curSum += n;
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
}
