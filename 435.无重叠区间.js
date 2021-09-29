/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
// @mark 需要首选根据结尾排序
/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals= function (intervals) {
    intervals = intervals.sort((a, b) => {
        return a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0];
    });
    // console.log(intervals);
    let removeCount = 0;
    let lastEdge = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= lastEdge) {
            // 采用
            lastEdge = intervals[i][1];
        } else {
            // 移除
            removeCount++;
        }
    }
    return removeCount;
};

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervalsWrong = function (intervals) {
    intervals = intervals.sort((a, b) => {
        return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1];
    });
    // console.log(intervals);
    let removeCount = 0;
    let lastEdge = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= lastEdge) {
            // 采用
            lastEdge = intervals[i][1];
        } else {
            // 移除
            removeCount++;
        }
    }
    return removeCount;
};
// @lc code=end


// console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));
// console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])); // Expected 2
// console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // Expected 1
console.log(eraseOverlapIntervals([[-52, 31], [-73, -26], [82, 97], [-65, -11], [-62, -49], [95, 99], [58, 95], [-31, 49], [66, 98], [-63, 2], [30, 47], [-40, -26]])); // Expected 7