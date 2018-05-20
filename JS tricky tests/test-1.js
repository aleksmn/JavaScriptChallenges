
let a = (('foo'+false)/5)?(typeof{}+7):7**true%4-1;

console.log(a);


// ('foo'+false) evaluates to string, and 'foofalse'/5 evaluates to NaN which is falsy .

// Not that it matters, but 'typeof{}' is 'object' and + 7 makes 'object7'

// But the condition was falsy so 7**true%4-1 is where it’s at. The order of operation happens to go left to right. So, 7**true - in this case true evaluates as 1 so it is 7**1 or 7. 7%4 is 3 and 3-1 is 2.

let b = 7**1;
console.log(b);