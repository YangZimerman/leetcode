/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */

// 复杂度 暴力解法 n^2

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
 var numberOfBoomerangs = function (points) {
    if (points.length <= 2) {
        return 0;
    }
    let distance = [];
    for (let i = 0; i < points.length; i++) {
        const pointA = points[i];
        for (let j = i; j < points.length; j++) {
            const pointB = points[j];
        }
    }
};
// @lc code=end

