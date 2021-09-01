/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
// 暴力解法 2^n
// 递归？

// utils
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
function getFnWithCache(fn) {
    let cache = {};
    return function (...args) {
        const cacheKey = JSON.stringify(args);
        if (cache[cacheKey]) {
            return cache[cacheKey];
        } else {
            const res = fn(...args);
            cache[cacheKey] = res;
            return res;
        }
    }
}
/**
 * 是否不可能凑齐目标值 复杂度n
 * @param {number[]} nums
 * @param {number} targetSum
 * @return {boolean}
 */
function canSumTargetImposible(nums, targetSum) {
    let sum = 0;
    let isImposible = false;
    for (let i = 0; i < nums.length; i++) {
        if (isImposible) {
            break;
        }
        sum += nums[i];
    }
    return isImposible;
}

/**
 * 暴力解法
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartitionExhaustion = function (nums) {
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


let canSumTargetRecursionCache = {};
/**
 * 递归方法
 * @param {number[]} nums
 * @param {number} targetSum
 * @return {boolean}
 */
function canSumTargetRecursion(nums, targetSum) {
    // 缓存
    const cacheKey = JSON.stringify([nums, targetSum]);
    // console.log(cacheKey);
    if (canSumTargetRecursionCache[cacheKey] !== undefined) {
        // console.log('命中');
        return canSumTargetRecursionCache[cacheKey];
    }

    // 特殊情形判断
    if (targetSum < 0 || nums.length === 0) {
        return false;
    } else if (targetSum === 0) {
        return true;
    } else if (nums.length === 1) {
        if (nums[0] === targetSum) {
            return true;
        } else {
            return false;
        }
    }
    // 和小 单大
    if (getSum(nums) < targetSum) {
        return false;
    }
    const res = canSumTargetRecursion(nums.slice(1), targetSum) || canSumTargetRecursion(nums.slice(1), targetSum - nums[0]);
    canSumTargetRecursionCache[cacheKey] = res;
    // console.log(`储存 ${cacheKey} ${Object.keys(canSumTargetRecursionCache).length}`);
    return res;
}
/**
 * 递归
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const targetNum = getSum(nums) / 2;
    const res= canSumTargetRecursion(nums, targetNum);
    canSumTargetRecursionCache = {};
    return res;
};
// @lc code=end


// console.log(canPartition([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99, 97]));
// console.log(canPartition([55, 12, 96, 65, 70, 64, 80, 17, 98, 12, 75, 11, 55, 56, 77, 58, 69, 17, 28, 53, 49, 45, 87, 89, 86, 19, 40, 5, 80, 85, 14, 27, 94, 38, 12, 71, 45, 51, 49, 38, 35, 5, 68, 95, 96, 49, 84, 56, 74, 18, 45, 56, 41, 84, 46, 64, 75, 17, 15, 51, 96, 79, 94, 26, 85, 51, 23, 65, 53, 81, 59, 46, 35, 69, 32, 3, 33, 33, 71, 72, 1, 18, 9, 8, 66, 14, 99, 50, 61, 78, 52, 60, 39, 20, 34, 89, 73, 17, 68, 1]));