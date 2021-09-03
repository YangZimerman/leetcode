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
    // if (
    //     getSum(nums) < targetSum
    //     || !nums.find(item => item <= targetSum)
    // ) {
    //     return false;
    // }
    let sum = 0;
    let res = false;
    let isAllItemBiggerThanTarget = true;
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if (item === targetSum) {
            res = true;
            break;
        } else if (isAllItemBiggerThanTarget && item < targetSum) {
            isAllItemBiggerThanTarget = false;
        }
        sum += item;
    }
    // if (sum < targetSum || isAllItemBiggerThanTarget) {
    //     console.log('yes', sum < targetSum, isAllItemBiggerThanTarget);
    // }
    if (!(sum < targetSum || isAllItemBiggerThanTarget) && !res) {
        res = canSumTargetRecursion(nums.slice(1), targetSum - nums[0]) || canSumTargetRecursion(nums.slice(1), targetSum);
    }
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
    Number.isInteger(targetNum)
    // 没想到该特殊情况
    if (!Number.isInteger(targetNum)) {
        return false;
    }
    const res = canSumTargetRecursion(nums, targetNum);
    // @test
    // console.log(canSumTargetRecursionCache);
    // console.log(Object.keys(canSumTargetRecursionCache).length);
    canSumTargetRecursionCache = {};
    return res;
};
// @lc code=end


console.time('416');
console.log(canPartition([97, 13, 81, 9, 28, 32, 97, 52, 20, 86, 13, 93, 35, 36, 54, 39, 99, 42, 23, 74, 90, 54, 49, 20, 76, 67, 73, 71, 79, 8, 3, 79, 32, 16, 24, 36, 28, 74, 65, 38, 100, 48, 19, 83, 12, 39, 10, 46, 43, 3, 40, 65, 6, 97, 55, 68, 73, 15, 64, 82, 47, 99, 19, 64, 99, 89, 55, 81, 71, 15, 23, 51, 99, 62, 26, 34, 73, 28, 71, 86, 72, 66, 95, 61, 71, 23, 66, 15, 11, 61, 34, 82, 13, 71, 16, 46, 99, 88, 44, 2]));
console.timeEnd('416');