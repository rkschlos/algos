//find the longest streak of consecutive values given the head of linkedlist

export class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

export const longestStreak = (head) => {
    let current_streak = 1
    let max_streak = 1
    let current = head
    while (current.next !== null) {
        let prevVal = current.val
        let next = current.next
        if (next.val === prevVal) {
            current_streak += 1
            current = next
        } else {
            max_streak = Math.max(current_streak, max_streak);
            current = next
            current_streak = 1
        }
    }
    return max_streak
}





