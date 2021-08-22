/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }
            if (nums[i] + nums[j] === target) {
                result = [i, j];
                break;
            }
        }
        if (result) {
            break;
        }
    }
    return result;
};
// @lc code=end

