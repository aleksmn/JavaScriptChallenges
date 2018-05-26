// Steamroller

// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  
  let flat = [].concat(...arr);
  
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;

}

steamrollArray([1, [2], [3, [[4]]]]);

/* Code Explanation:
Use spread operator to concatenate each element of arr with an empty array
Use Array.some() method to find out if the new array contains an array still
If it does, use recursion call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
If it does not, return the flattened array */



// Advanced Code Solution:

function steamrollArray(arr) {
  return arr.toString()
    .replace(',,', ',')       // "1,2,,3" => "1,2,3"
    .split(',')               // ['1','2','3']
    .map(function(v) {
      if (v == '[object Object]') { // bring back empty objects
        return {};
      } else if (isNaN(v)) {        // if not a number (string)
        return v;
      } else {
        return parseInt(v);         // if a number in a string, convert it
      }
    });
}