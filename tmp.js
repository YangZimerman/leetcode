/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start

// @mark 更好、更简单的解法 左右扫描一次
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let resArr = new Array(ratings.length);
    resArr.fill(1);
    for (let i = 1; i < resArr.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            resArr[i] = resArr[i - 1] + 1;
        }
    }
    for (let i = resArr.length - 2; i > -1; i--) {
        if (ratings[i] > ratings[i + 1] && resArr[i] <= resArr[i + 1]) {
            resArr[i] = resArr[i + 1] + 1;
        }
    }
    return resArr.reduce((pre, cur) => {
        return pre + cur;
    }, 0)
};

/**
 * @param {number[]} ratings
 * @return {number}
 */
var oldCandy = function (ratings) {
    if (ratings.length <= 1) {
        return 1;
    }
    // 初次处理 会出现0与负数情况
    let resArr = [1];
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            if (resArr[i - 1] <= 0) {
                resArr[i] = 2;
            } else {
                resArr[i] = resArr[i - 1] + 1;
            }
        } else if (ratings[i] === ratings[i - 1]) {
            resArr[i] = 1;
        } else {
            if (resArr[i - 1] <= 1) {
                resArr[i] = resArr[i - 1] - 1;
            } else {
                resArr[i] = 1;
            }
        }
    }
    console.log(resArr);
    let belowOneRageList = [];
    let sum = 0;
    // 统计0与负数 的区段
    for (let i = 0; i < resArr.length; i++) {
        sum += resArr[i];
        if (resArr[i] === 0) {
            belowOneRageList.push([i, i]);
        } else if (resArr[i] < 0) {
            const belowOneRage = belowOneRageList[belowOneRageList.length - 1];
            if (belowOneRage[1] === i - 1) {
                belowOneRage[1] = i;
            } else {
                // error?
            }
        }
    }
    // 补齐区段差值
    for (let i = 0; i < belowOneRageList.length; i++) {
        const belowOneRage = belowOneRageList[i];
        const singleSupply = -resArr[belowOneRage[1]] + 1;
        let supplyCount = belowOneRage[1] - belowOneRage[0] + 2;
        if (ratings[belowOneRage[0] - 2] !== undefined
            && ratings[belowOneRage[0] - 2] > ratings[belowOneRage[0] - 1]
            && resArr[belowOneRage[0] - 2] <= supplyCount
        ) {
            // supplyCount += 1;
            sum += supplyCount - resArr[belowOneRage[0] - 2] + 1;
        }
        sum += singleSupply * supplyCount;
    }
    return sum;
};
// @lc code=end


// console.log(candy([1, 0, 2]));
// console.log(candy([1, 2, 87, 87, 87, 2, 1]));
// console.log(candy([1, 2, 3, 1, 0]));
// console.log(candy([1, 6, 10, 8, 7, 3, 2])); // 18
// console.log(candy([0, 1, 2, 5, 3, 2, 7])); // 15