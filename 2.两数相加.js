/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l1Node = l1;
    let l2Node = l2;
    let l3;
    let l3Node;
    let jinwei = 0;
    while (l1Node || l2Node) {
        const nodeSum =
            (l1Node && l1Node.val || 0) +
            (l2Node && l2Node.val || 0) +
            jinwei;
        l1Node = l1Node && l1Node.next;
        l2Node = l2Node && l2Node.next;
        jinwei = parseInt(nodeSum / 10);
        const newNodeVal = nodeSum % 10;
        if (!l3) {
            l3 = new ListNode(newNodeVal);
            l3Node = l3;
        } else {
            l3Node.next = new ListNode(newNodeVal);
            l3Node = l3Node.next;
        }
    }
    if (jinwei) {
        l3Node.next = new ListNode(jinwei);
    }
    return l3;
};
// @lc code=end

