import {describe, expect, test} from '@jest/globals';
import { longestStreak } from "./longestStreak";
import { Node } from "./longestStreak";

// import {describe, expect, test} from '@jest/globals';
// import {sum} from './sum';

// describe('sum module', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });

describe('longest streak', () => {
    test('calculates longest streak correctly', () => {
        const a = new Node(5);
        const b = new Node(5);
        const c = new Node(7);
        const d = new Node(7);
        const e = new Node(7);
        const f = new Node(2);

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;

        expect(longestStreak(a)).toBe(3);
    })
})


