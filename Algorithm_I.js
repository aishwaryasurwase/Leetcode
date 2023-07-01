// 704. Binary search

// // link - https://leetcode.com/problems/binary-search/?envType=study-plan&envId=algorithm-i&plan=algorithm

// var search = function (nums, target) {
//   let left = 0,
//     right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (target === nums[mid]) {
//       return mid;
//     } else if (target < nums[mid]) {
//       right = mid - 1;
//     } else if (target > nums[mid]) {
//       left = mid + 1;
//     }
//   }
//   return -1;
// };

// let nums = [-1, 0, 3, 5, 9, 12],
//   target = 9;

// console.log(search(nums, target));

// ----

// link - https://leetcode.com/problems/search-insert-position/?envType=study-plan&envId=algorithm-i&plan=algorithm
// 35. Search Insert Position

// var searchInsert = function (nums, target) {
//   let left = 0,
//     right = nums.length - 1;
//   if (target < nums[0]) return 0;
//   if (target > nums[nums.length - 1]) return nums.length;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     console.log("M", mid);
//     if (nums[mid] == target || (target < nums[mid] && target > nums[mid - 1])) {
//       return mid;
//     } else if (target < nums[mid]) {
//       right = mid - 1;
//     } else if (target > nums[mid]) {
//       left = mid + 1;
//     }
//   }
//   return left;
// };
// // let nums = [1, 3, 5, 6],
// //   target = 5;
// // let nums = [1, 3, 5, 6],
// //   target = 2;
// // let nums = [1, 3, 5, 6],
// //   target = 7;
// // let nums = [1, 3],
// //   target = 2;
// // let nums = [1, 3, 5],
// //   target = 4;
// console.log(searchInsert(nums, target));
// ---

// 977. Squares of a Sorted Array
// link  - https://leetcode.com/problems/squares-of-a-sorted-array/description/
// var sortedSquares = function (nums) {
//   let start = 0;
//   let end = nums.length - 1;
//   let ind = end;
//   let sortedArr = [];
//   while (ind > -1) {
//     if (Math.abs(nums[start]) > Math.abs(nums[end])) {
//       sortedArr[ind--] = nums[start] * nums[start];
//       start++;
//     } else {
//       sortedArr[ind--] = nums[end] * nums[end];
//       end--;
//     }
//   }
//   return sortedArr;
// };
// let nums = [-4, -1, 0, 3, 10];
// console.log(sortedSquares(nums));

// ---
// 189. Rotate Array
// link - https://leetcode.com/problems/rotate-array/description/?envType=study-plan&envId=algorithm-i&plan=algorithm

// const reverse = function (nums, i, j) {
//   while (i < j) {
//     [nums[i], nums[j]] = [nums[j], nums[i]];
//     i++;
//     j--;
//   }
// };
// var rotate = function (nums, k) {
//   k %= nums.length;
//   reverse(nums, 0, nums.length - 1);
//   reverse(nums, 0, k - 1);
//   reverse(nums, k, nums.length - 1);
// };
// let nums = [1, 2, 3, 4, 5, 6, 7],
//   k = 3;
// let nums = [-1, -100, 3, 99],
//   k = 2;

// console.log(rotate(nums, k));
