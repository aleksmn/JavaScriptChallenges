// Chunky Monkey 

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  
  var result = [];
  
  for (var i = 0; i < arr.length; i += size) {
    
    result.push(arr.slice(i, i + size));
  }

  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3);



// Basic Code Solution:

function chunkArrayInGroups(arr, size) {

  var temp = [];
  var result = [];

//   Our for loop loops until a is equal to or more than the length of the array in our test.
// Inside our loop, we push to temp using temp.push(arr[a]); 
// if the remainder of a / size is not equal to size - 1.

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}

/* 
Code Explanation:
Firstly, we create two empty arrays called temp and result, which we will eventually return.

Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
Next, if temp isn’t an empty array, we push it to result.
Finally, we return the value of result. */




// Advanced Code Solution:

function chunkArrayInGroups(arr, size) {

  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

/* Code Explanation:
Firstly, we create two variables. newArr is an empty array which we will push to. We also have the i variable set to zero, for use in our while loop.
Our while loop loops until i is equal to or more than the length of the array in our test.
Inside our loop, we push to the newArr array using arr.slice(i, i+size). 
For the first time it loops, it will look something like:
newArr.push(arr.slice(0, 0+2))
After we push to newArr, we add the variable of size onto i.
Finally, we return the value of newArr. */