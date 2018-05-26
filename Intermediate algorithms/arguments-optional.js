// Arguments Optional

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.


function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== 'number') ? 
    undefined: 
    args.length > 1 ?
      args.reduce((acc, n) => acc += n, 0):
      (n) => typeof n === "number" ? 
        n + args[0]:
        undefined;
}

// test here
addTogether(2,3);


// First I iterate through the arguments and check for arguments that are not a number and return undefined
// If it’s not I then check if the arguments length is above 1, if it is I sum the arguments using Array.prototype.reduce
// Else I return a function that checks if the passed in argument is a number and sum it, if not return undefined