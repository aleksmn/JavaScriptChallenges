// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.


function sumAll(arr) {
  
  var max = Math.max(arr[0], arr[1]);
  
  var min = Math.min(arr[0], arr[1]);

  var result = 0;
  
  for(var i = min; i <= max; i++ ){
    result += i;
  }
  
  return result;
}

// console.log(sumAll([1, 4]));





// Advanced Code Solution:

function sumAll(arr) {
  // Creating a variable sum to store the sum of the elements.

    var sum = 0;

    // Starting iteration of the loop from min element of 
    // given array and stopping when it reaches the max element.


    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
       // Using a spread operator (…arr) allows passing the actual 
        // array to the function instead of one-by-one elements.
        sum += i;
    }
  return sum;
}
console.log(sumAll([1, 4]));

