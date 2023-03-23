//recursive

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

////working solution

// const isUnivalueList = (head, prevVal = null) => {
//     if (head === null) return true;
//     if (prevVal === null || prevVal === head.val) {
//         return isUnivalueList(head.next, head.val)
//     } else {
//         return false;
//     }
// }

////buggy 
const isUnivalueList = (head, initVal = null) => {
  if (initVal === null) {
    return isUnivalueList(head, head.val);
  }
  
  if (head.val !== initVal) return false;
  
  console.log(head.next)
  if (head.next !== null) {
    return isUnivalueList(head.next, initVal);
  } else {
    return true;
  }
};



//test00

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

console.log(isUnivalueList(a))