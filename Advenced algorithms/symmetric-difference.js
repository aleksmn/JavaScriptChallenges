/* Symmetric Difference

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). */


function sym() {
  
  var args = Array.prototype.slice.call(arguments);
  
  var getDiff = function (arr1, arr2) {
    
    function filterFunction (arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }
    
    return filterFunction (arr1, arr2)
      .concat(filterFunction (arr2, arr1));
    
  };
  
  var symmDiff = args.reduce(getDiff, []);
  
//   return symmDiff;
  
  // var unique = symmDiff.filter(function(elem, index, self) { 
  //   return index === self.indexOf(elem);
  // });

  // Using Set and spread syntax
  var unique = [...new Set(symmDiff)];
  
  return unique;
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));

// testing Set and spread syntax

var numbers = [1, 2, 2, 3, 3, 4, 5];

var uniqueNumbers = [... new Set(numbers)];

console.log(uniqueNumbers);


/* 
Code Explanation:
The slice() method is used to break down the arguments object to an array, args.
The getDiff function finds the symmetric difference between two sets, arr1 and arr2. It is used as a callback function for the reduce() method called on args.
The first filterFunction() returns elements in arr1 that don’t exist in arr2.
The next filterFunction() is run on each array against the other to check the inverse of the first check for uniqueness and concatenate it.
symarray consists of the reduced arguments.
filter() is used on symarray to keep only the unique values and unique is returned. */






// Advanced Code Solution:

function sym() {
  // difference between set A and set B
  const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));
  // spread operator to convert array like object to array
  const result = [...arguments]
    // map elements in arguments (array) to Set
    .map(arr => new Set(arr))
    // using the formula in https://en.wikipedia.org/wiki/Symmetric_difference
    // i reduce it by uniting the diff(A, B) and diff(B, A)
    .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

  // convert the set to array by using spread operator again
  return [...result];
}

// test here
sym([1, 2, 3], [5, 2, 1, 4]);

/* Code Explanation:
diff consists of the difference between set A and set B.
result holds the object which has been converted to an array using the spread operator.
map() is used to populate the new set object with elements from arr using the symmetric difference formula.
Before returning, the set is converted to an array using the spread operator. */