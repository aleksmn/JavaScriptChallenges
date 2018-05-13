// Diff Two Arrays

// Compare two arrays and return a new array 
// with any items only found in one of the two 
// given arrays, but not both. In other words, 
// return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
  var newArr = [];
  
  var onlyInFirst = [];
  var onlyInSecond = [];

  onlyInFirst = arr1.filter(function isUnic1(val) {
    
      return arr2.indexOf(val) < 0;
    
   });

  onlyInSecond = arr2.filter(function isUnic2(val) {
    
    return arr1.indexOf(val) < 0;

  });

  return onlyInSecond.concat(onlyInFirst);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



// Advanced Code Solution (Declarative Solution):


function diffArray(arr1, arr2) {
  return arr1
    .filter(el => !arr2.includes(el))
    .concat(
      arr2.filter(el => !arr1.includes(el))
    )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);