// Return the left and right index of the max subarray sum,
// assuming there's exactly one result (no ties).
// Sliding window variation of Kadane's: O(n)
function slidingWindow(nums) {
  let maxSum = nums[0];
  let curSum = 0;
  let maxL = 0,
    maxR = 0;
  let L = 0;

  for (let R = 0; R < nums.length; R++) {
    if (curSum < 0) {
      curSum = 0;
      L = R;
    }
    curSum += nums[R];
    if (curSum > maxSum) {
      maxSum = curSum;
      maxL = L;
      maxR = R;
    }
  }
  return [maxL, maxR];
}

// Check if array contains a pair of duplicate values,
// where the two duplicates are no farther than k positions from
// eachother (i.e. arr[i] == arr[j] and abs(i - j) + 1 <= k).
// O(n * k)
function closeDuplicatesBruteForce(nums, k) {
  for (let L = 0; L < nums.length; L++) {
    for (let R = L + 1; R < Math.min(nums.length, L + k); R++) {
      if (nums[L] == nums[R]) {
        return true;
      }
    }
  }
  return false;
}

// Same problem using sliding window.
// O(n)
function closeDuplicates(nums, k) {
  let window = new Set(); //Cur window of size <= k
  let L = 0;

  for (let R = 0; R < nums.length; R++) {
    if (R - L + 1 > k) {
      window.delete(nums[L]);
      L++;
    }
    if (window.has(nums[R])) {
      return true;
    }
    window.add(nums[R]);
  }
  return false;
}

// Find the length of longest subarray with the same
// value in each position: O(n)
function longestSubarray(nums) {
  let length = 0;
  let L = 0;

  for (let R = 0; R < nums.length; R++) {
    if (nums[L] != nums[R]) {
      L = R;
    }
    length = Math.max(length, R - L + 1);
  }
  return length;
}

// Find length of minimum size subarray where the sum is
// greater than or equal to the target: O(n)
function shortestSubarray(nums, target) {
  let L = 0,
    total = 0;
  let length = Infinity;

  for (let R = 0; R < nums.length; R++) {
    total += nums[R];
    while (total >= target) {
      length = Math.min(R - L + 1, length);
      total -= nums[L];
      L++;
    }
  }

  if (length == Infinity) {
    return 0;
  }
  return length;
}
