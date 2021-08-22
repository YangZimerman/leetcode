/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
function generateNumArr(x) {
    let num = Math.abs(x);
    if (num === 0) {
        return [0];
    }
    const resultArr = [];
    while (num > 0) {
        resultArr.push(num % 10);
        num = parseInt(num / 10);
    }
    return resultArr;
}
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const isMinus = x < 0;
    const numArr = generateNumArr(x);
    let result = 0;
    for (let i = 0; i < numArr.length; i++) {
        result += numArr[i] * Math.pow(10, (numArr.length - i - 1));
    }
    if (result >= Math.pow(2, 31)) {
        return 0;
    }
    if (isMinus) {
        result = -result;
    }
    return result;
};
// 更好利用了原生API
const exampleReverse = (x) => {
    const sign = x > 0 ? 1 : -1
    const absNum = Math.abs(x)
    const reverse = Array.from(absNum.toString()).reverse().join('')
    if (reverse > Math.pow(2, 31)) {
        console.log('object');
        return 0
    }
    return reverse * sign
}
// @lc code=end
