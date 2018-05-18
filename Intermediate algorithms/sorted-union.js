/* Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. */



function uniteUnique(arr) {
  
  var args = Array.from(arguments);
  
  
  var newArr = args.reduce(function(accumulator, current){
    return accumulator.concat(current);
  }, []);
  
  
  var unic = newArr.reduce(function(a,b){
    if(a.indexOf(b) < 0) a.push(b);
    return a;
  },[]);
  
  return unic;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



// Advanced Code Solution:

function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/* Code Explanation:
Number of arguments can change dynamically, so we don’t need to bother providing our function uniteUnique() with arguments at all.
We use a while loop to concatenate all the arguments into one array called concatArr.
We use filter() to remove the duplicate elements by checking the index of each element and removing same elements with different positions.
Ordering will be preserved here. */