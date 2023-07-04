// // 34. Find First and Last Position of Element in Sorted Array
// // link - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/?envType=study-plan&envId=algorithm-ii&plan=algorithm
// var searchRange = function (nums, target) {
//   let left = 0,
//     right = nums.length - 1,
//     positions = [-1, -1];
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       console.log(nums[mid]);
//       let increaseInd = mid;
//       let decreseInd = mid;
//       while (nums[increaseInd] === target) {
//         increaseInd++;
//       }
//       while (nums[decreseInd] === target) {
//         decreseInd--;
//       }
//       return [decreseInd + 1, increaseInd - 1];
//     } else if (target < nums[mid]) {
//       right = mid - 1;
//     } else if (target > nums[mid]) {
//       left = mid + 1;
//     }
//   }
//   return positions;
// };
// // let nums = [5, 7, 7, 8, 8, 10],
// //   target = 8;
// // let nums = [5, 7, 7, 8, 8, 10],
// //   target = 6;
// let nums = [],
//   target = 0;
// console.log(searchRange(nums, target));
// -----
// 33. Search in Rotated Sorted Array
// link - https://leetcode.com/problems/search-in-rotated-sorted-array/?envType=study-plan&envId=algorithm-ii&plan=algorithm
// var search = function (nums, target) {};
// let nums = [4, 5, 6, 7, 0, 1, 2],
//   target = 0;

// console.log(search(nums, target));
