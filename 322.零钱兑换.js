/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChangeOld = function (coins, amount) {
    if (amount === 0) {
        return 0;
    }
    let resArr = [];
    let minCoin = coins[0]; // 第二次改进重点
    coins.forEach(item => {
        resArr[item] = 1;
        if (item < minCoin) {
            minCoin = item;
        }
    });
    for (let targetAmount = 2 * minCoin; targetAmount <= amount; targetAmount++) {
        if (resArr[targetAmount] === 1) {
            continue;
        }
        if (targetAmount > amount - minCoin + 1 && targetAmount !== amount) {
            // 临近结束区域的空白无用区域
            continue;
        }
        let targetCount = -1;
        // for (let memberNum = 1; memberNum <= targetAmount / 2; memberNum++) {
        for (let memberNum = minCoin; memberNum <= targetAmount / 2; memberNum++) {
            const aCount = resArr[targetAmount - memberNum];
            const bCount = resArr[memberNum];
            if (
                aCount !== undefined && aCount !== -1 && bCount !== undefined && bCount !== -1
            ) {
                const targetCountThisRound = aCount + bCount;
                if (targetCount == -1) {
                    targetCount = targetCountThisRound;
                } else if (targetCountThisRound < targetCount) {
                    targetCount = targetCountThisRound;
                }
            }

        }
        resArr[targetAmount] = targetCount;
    }
    if (resArr[amount] == undefined) {
        resArr[amount] = -1;
    }
    // console.log(resArr);
    return resArr[amount];
};
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (amount === 0) {
        return 0;
    }
    let resArr = [];
    let minCoin = coins[0]; // 第二次改进重点
    coins.forEach(item => {
        resArr[item] = 1;
        if (item < minCoin) {
            minCoin = item;
        }
    });
    for (let targetAmount = 2 * minCoin; targetAmount <= amount; targetAmount++) {
        if (resArr[targetAmount] === 1) {
            continue;
        }
        if (targetAmount > amount - minCoin + 1 && targetAmount !== amount) {
            // 临近结束区域的空白无用区域
            continue;
        }
        let targetCount = -1;
        // @mark 内层循环以硬币为索引
        for (let coinSN = 0; coinSN < coins.length; coinSN++) {
            const amountSN = targetAmount - coins[coinSN];
            const amountToCompose = resArr[amountSN];
            if (amountToCompose !== undefined && amountToCompose !== -1 && (targetCount === -1 || amountToCompose + 1 < targetCount)) {
                targetCount = amountToCompose + 1;
            }
        }
        resArr[targetAmount] = targetCount;
    }
    if (resArr[amount] == undefined) {
        resArr[amount] = -1;
    }
    // console.log(resArr);
    return resArr[amount];
};
// @lc code=end


// coinChange([1, 2, 5], 11)
console.time('test')
// coinChange([470, 18, 66, 301, 403, 112, 360], 8235)
// console.log(coinChange([52, 480, 116, 409, 170, 240, 496], 8230));
// console.log(coinChange([186, 419, 83, 408], 6249));
console.log(coinChange([486, 156, 330, 192, 457, 71, 99], 8175));
console.timeEnd('test')