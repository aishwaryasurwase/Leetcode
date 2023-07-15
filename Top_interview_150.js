// link - https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
// Problem 1
// Merge Sorted Array

// let nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;

// var merge = function (nums1, m, nums2, n) {};

// merge(nums1, m, nums2, n);

// ---
// link - https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
// Problem 2
// 27. Remove Element

// var removeElement = function (nums, val) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[j] = nums[i];
//       j++;
//     }
//   }
//   return j;
// };

// let nums = [3, 2, 2, 3],
//   val = 3;
// console.log(removeElement(nums, val));
// ----
// link - https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
// Problem 3
// 26. Remove Duplicates from Sorted Array

// var removeDuplicates = function (nums) {
//   let j = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[j] !== nums[i]) {
//       j++;
//       nums[j] = nums[i];
//     }
//   }
//   return j + 1;
// };
// // let nums = [1, 1, 2];
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(nums));
// ----
