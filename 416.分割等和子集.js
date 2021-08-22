/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
// 暴力解法 2^n
/**
 * @param {number[]} nums
 * @return {number}
 */
function getSum(nums) {
    let sum = 0;
    nums.forEach(val => {
        sum += val;
    });
    return sum;
}
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const targetNum = getSum(nums) / 2;
    let resArr = [];
    let isFinded = false;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (isFinded || num === targetNum) {
            isFinded = true;
            break;
        } else if (num > targetNum) {
            continue;
        }
        const resArrLen = resArr.length;
        for (let j = 0; j < resArrLen; j++) {
            const resItem = resArr[j];
            const sumItem = resItem + num;
            if (sumItem === targetNum) {
                isFinded = true;
                break;
            } else if (sumItem < targetNum) {
                resArr.push(sumItem);
            }
        }
        resArr.push(num);
    }
    return isFinded;
};
// @lc code=end

