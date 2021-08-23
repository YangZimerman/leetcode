/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let currnetBefore = head;
    let currentHead = head.next;
    head.next = null;
    while (currentHead.next) {
        const currentNext = currentHead.next;
        currentHead.next = currnetBefore;
        currnetBefore = currentHead;
        currentHead = currentNext;
    }
    currentHead.next = currnetBefore;
    // @mark 此处需要返回最后一个节点
    return currentHead;
};
// @lc code=end


const listNodes = [1, 2, 3, 4, 5].map(num => new ListNode(num));
listNodes.forEach((node, index) => {
    const nextNode = listNodes[index + 1];
    if (nextNode) {
        node.next = nextNode;
    }
});
// console.log(listNodes);
console.log(reverseList(listNodes[0]));