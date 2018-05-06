//Where do I belong 

// Return the lowest index at which a value (second argument) 
// should be inserted into an array (first argument) once it has been sorted. 
//The returned value should be a number.


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  
  arr.push(num);
  arr.sort(function(a, b){
    return a - b;
  });
  
  return arr.indexOf(num);
}

getIndexToIns([5, 3, 20, 3], 5);