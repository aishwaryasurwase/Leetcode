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
// ---

// 283. Move Zeroes
// link - https://leetcode.com/problems/move-zeroes/?envType=study-plan&envId=algorithm-i&plan=algorithm

// var moveZeroes = function (nums) {
//   let left = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       [nums[left++], nums[i]] = [nums[i], nums[left]];
//     }
//   }
//   return nums;
// };
// let nums = [0, 1, 0, 3, 12];
// let nums = [0];
// moveZeroes(nums);
// ----

// 167. Two Sum II - Input Array Is Sorted
// link - https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/?envType=study-plan&envId=algorithm-i&plan=algorithm

// var twoSum = function (numbers, target) {
//   let left = 0,
//     right = numbers.length - 1;
//   while (left < right) {
//     let sum = numbers[left] + numbers[right];
//     if (sum == target) {
//       return [left + 1, right + 1];
//     }
//     if (sum > target) {
//       right--;
//     } else if (sum < target) {
//       left++;
//     }
//   }
// };
// // let numbers = [2, 7, 11, 15],
// //   target = 9;
// let numbers = [2, 3, 4],
//   target = 6;
// twoSum(numbers, target);
// ----

// 344. Reverse String
// link - https://leetcode.com/problems/reverse-string/?envType=study-plan&envId=algorithm-i&plan=algorithm

// var reverseString = function (s) {
//   let left = 0,
//     right = s.length - 1;
//   while (left <= right) {
//     [s[left++], s[right--]] = [s[right], s[left]];
//   }
//   return s;
// };
// // let s = ["h", "e", "l", "l", "o"];
// // let s = ["H", "a", "n", "n", "a", "h"];
// reverseString(s);
// ----

// 557. Reverse Words in a String III
// link - https://leetcode.com/problems/reverse-words-in-a-string-iii/?envType=study-plan&envId=algorithm-i&plan=algorithm

// const reverseWord = (word) => {
//   let left = 0,
//     right = word.length - 1;
//   while (left <= right) {
//     [word[left++], word[right--]] = [word[right], word[left]];
//   }
//   return word.join("");
// };
// var reverseWords = function (s) {
//   let str = s.split(" "),
//     result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += `${reverseWord(str[i].split(""))}${
//       i !== str.length - 1 ? " " : ""
//     }`;
//   }
//   return result;
// };
// // let s = "Let's take LeetCode contest";
// let s = "God Ding";
// reverseWord(s);
// ----

// 876. Middle of the Linked List
// link - https://leetcode.com/problems/middle-of-the-linked-list/?envType=study-plan&envId=algorithm-i&plan=algorithm

// var middleNode = function (head) {
//   let slow = head,
//     fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return slow;
// };
// // let head = [1, 2, 3, 4, 5];
// // let head = [1, 2, 3, 4, 5, 6];
// middleNode(head);

// ----
// 19. Remove Nth Node From End of List
// link - https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

// var removeNthFromEnd = function (head, n) {
//   let fast = head,
//     slow = head;
//   while (n) {
//     fast = fast.next;
//     n--;
//   }
//   if (!fast) return head.next;
//   while (fast.next) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   slow.next = slow.next.next;
//   return head;
// };

// // let head = [1, 2, 3, 4, 5],
// //   n = 2;
// // let head = [1],
// //   n = 1;
// let head = [1, 2],
//   n = 1;
// removeNthFromEnd(head, n);

// ----

// // 231. Power of Two
// // link - https://leetcode.com/problems/power-of-two/description/

// var isPowerOfTwo = function (n) {
//   if (n == 0) return false;
//   while (n !== 1) {
//     if (n % 2 !== 0) return false;
//     n /= 2;
//   }
//   return true;
// };
// // let n = 1;
// // let n = 16;
// let n = 3;
// console.log(isPowerOfTwo(n));
// // ---
