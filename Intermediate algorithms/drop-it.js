// Drop it
// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

// Return the rest of the array, otherwise return an empty array.



function dropElements(arr, func) {
  // Drop them elements.
  
  filtered = arr.filter(func);
  
  if (arr.indexOf(filtered[0]) < 0) {
    return [];
  }
  
  return arr.slice(arr.indexOf(filtered[0]));
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});



// Intermediate Code Solution:

function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

/* Code Explanation:
Use ES6 findIndex() function to find the index of the element that passes the condition
Slice the array from the found index until the end
There is one edge case! if the condition is not met against any of the elements ‘findIndex’ will return -1 which messes up the input to slice(). In this case use a simple conditional operator to return false instead of -1. And the ternary operator (? returns the found index of required elements when the condition is true, and the length of the array otherwise so that the return value is an empty array as is instructed. */




// Advanced Code Solution:

function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

// Code Explanation
/* Use a while loop with Array.prototype.shift() to continue checking and dropping the first element of the array until the function returns true. It also makes sure the array is not empty first to avoid infinite loops.
Return the filtered array. */