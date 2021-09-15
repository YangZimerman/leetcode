/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function (g, s) {
    g.sort((a, b) => {
        return a - b;
    });
    s.sort((a, b) => {
        return a - b;
    });
    let i = 0;
    let j = 0;
    // for (; i < g.length; i++) {
    while (i < g.length) {
        let gI = g[i];
        if (j >= s.length) {
            break;
        }
        while (j < s.length) {
            if (s[j] >= gI) {
                // 可以满足
                i++;
                j++;
                break;
            } else {
                j++;
            }
        }
    }
    return i;
};
// @lc code=end

// console.log(findContentChildren([1, 2, 3], [1, 1]));
// console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
