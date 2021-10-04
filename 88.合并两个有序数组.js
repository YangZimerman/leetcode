/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
// @mark 参考解决方法 是将指针放到数组末尾
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (m === 0) {
        nums1.splice(0, n, ...nums2);
    }

    let i = 0, j = 0;
    // i的 m 或 m+n 边界值问题
    while (i < m + j && j < n) {
        if (nums1[i] >= nums2[j]) {
            // ?
            // nums1.splice(i - 1, 0, nums2[j]);
            nums1.splice(i, 0, nums2[j]);
            // i += 2;
            j++;
        } else {
            i++;
        }
    }
    if (j < n) {
        // 将 nums2 剩余部分 剪贴到numb1上
        nums1.splice(i, 0, ...nums2.slice(j));
    }
    // 删除多余的 0
    nums1.splice(m + n, n);
    // return nums1;
};
// @lc code=end

// console.log(merge(
//     [1, 2, 3, 0, 0, 0], 3,
//     [2, 5, 6], 3
// ));