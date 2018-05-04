// Slasher Flick

// Return the remaining elements of an array after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.


function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  
  return arr.splice(howMany);
// OR
// return arr.slice(howMany);
// with same result
}

console.log(slasher([1, 2, 3], 2));



// Basic Code Solution:

function slasher(arr, howMany) {
  // remove the head
  arr.splice(0, howMany);
  // return the remaining or the tail
  return arr;
}
slasher([1, 2, 3], 2);