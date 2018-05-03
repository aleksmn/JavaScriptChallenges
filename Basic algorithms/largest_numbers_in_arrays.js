// Return Largest Numbers in Arrays

// Basic Solution

function largestOfFour(arr) {

  // Create a variable to store the results as an array.
  var results = [];
  // Create an outer loop to iterate through the outer array.
  for (var n = 0; n < arr.length; n++) {
    //Create a second variable to hold the largest number and initialise it with the first number. 
    // This must be outside an inner loop so it won’t be reassigned until we find a larger number.
    var largestNumber = arr[n][0];
    // Create an inner loop to work with the sub-arrays.
    for (var sb = 1; sb < arr[n].length; sb++) {
      // Check if the element of the sub array is larger than the currently stored largest number. 
      // If so, then update the number in the variable.
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }
    // After the inner loop, save the largest number in the corresponding position inside of the results array.
    results[n] = largestNumber;
  }

  return results;
}



// My alternative, using sort()

function largestOfFour(arr) {
  
  var result = [];
  
  for (var i = 0; i < arr.length; i++) {
    arr[i].sort(function(a, b) {
      return b - a;
    });
    result.push(arr[i][0]);
  }
  
  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));




// Intermediate Code Solution:
// (Declarative approach)

function largestOfFour(arr) {
  // Map all items within the main array to a new array using 
  // Array.prototype.map() and return this array as the final result.
  return arr.map(function(group){
    // Within each inner array, we reduce its contents down 
    // to a single value using Array.prototype.reduce().
    // The callback function passed to the reduce method 
    // takes the previous value and the current value and 
    // compares the two values.
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
      // if the current value is higher than the previous
      // value we set it as the new previous value for 
      // comparison with the next item within the array or 
      // returns it to the map method callback if it’s 
      // the last item.
    });
  });
}



// Advanced Code Solution:
// (Declarative approach)

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

/* Code Explanation:
TL;DR: We build a special callback function (using the Function.bind method), that works just like Math.max but also has Function.prototype.apply's ability to take arrays as its arguments :smiley:

We start by mapping through the elements inside the main array. Meaning each one of the inner arrays.

Now the need a callback function to find the max of each inner array provided by the map.

So we want to create a function that does the work of Math.max and accepts input as an array (which by it doesn’t by default).

In other words, it would be really nice and simple if this worked by itself:

Math.max([9, 43, 20, 6]); // Resulting in 43

Alas, it doesn’t.

To do the work of accepting arguments in the shape of an array, there is this Function.prototype.apply method, but it complicates things a bit by invoking the context function.

i.e. Math.max.apply(null, [9, 43, 20, 6]); would invoke something like a Max.max method. What we’re looking for… almost.

Here we’re passing null as the context of the Function.prototype.apply method as Math.max doesn’t need any context.

Since arr.map expects a callback function, not just an expression, we create a function out of the previous expression by using the Function.bind method.

Since, Function.prototype.apply is a static method of the same Function object, we can call Function.prototype.bind on Function.prototype.apply i.e. Function.prototype.apply.bind.

Now we pass the context for the Function.prototype.apply.bind call (in this case we want Math.maxso we can gain its functionality).

Since the embedded Function.prototype.apply method will also require a context as it’s 1st argument, we need to pass it a bogus context.

So, we pass null as the 2nd param to Function.prototype.apply.bind which gives a context to the Math.max method.
Since, Math.max is independent of any context, hence, it ignores the bogus context given by Function.prototype.apply method call.
Thus, our Function.prototype.apply.bind(Math.max, null) makes a new function accepting the arr.map values i.e. the inner arrays. */