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
