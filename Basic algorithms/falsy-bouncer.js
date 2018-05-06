// Falsy Bouncer 
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.



//Solution:

function bouncer(arr) {
  return arr.filter(Boolean);
}


// Code Explanation:
// The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy 456 value or false for falsy value. Hence we pass the built-in Boolean function.





// Beginer Code Solution:

function isGood(val){  
  return val !== false && val !== null && val !== 0 && val !== "" && val !== undefined && !Number.isNaN(val);   
 }
 
 function bouncer(arr) {
   return arr.filter(isGood);  
 }
 
 bouncer([1, null, NaN, 2, undefined]);