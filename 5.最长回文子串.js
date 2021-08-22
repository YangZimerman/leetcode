/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
// 动态规划 n^2
// 暴力解法 n^3
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const strArr = Array.from(s);
    const strLen = s.length;
    let resArr = new Array(strLen);
    let resStr = '';
    for (let len = 1; len <= strLen; len++) {
        for (let i = 0; i < strLen; i++) {
            const j = i + len - 1;
            // console.log(`len: ${len} ; i: ${i}`);
            if (j > strLen - 1) {
                // console.log('break');
                break;
            }
            // console.log(len);
            if (!resArr[i]) {
                resArr[i] = [];
            }
            // @todo 可以合并条件
            if (i === j) {
                resArr[i][j] = 1;
            } else if (j - i === 1 && strArr[i] === strArr[j]) {
                resArr[i][j] = 1;
            } else if (j - i > 1 && resArr[i + 1][j - 1] && strArr[i] === strArr[j]) {
                resArr[i][j] = 1;
            } else {
                resArr[i][j] = 0;
            }
            if (resArr[i][j]) {
                resStr = s.substring(i, j + 1);
            }
        }
    }
    // console.log(resArr);
    return resStr;
};
// @lc code=end


console.log(longestPalindrome('babad'));