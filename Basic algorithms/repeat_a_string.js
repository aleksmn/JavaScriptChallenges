// Repeat a string repeat a string 
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

//my solution

function repeatStringNumTimes(str, num) {
  
  // if(num < 0){ return "";}
  
  // return str.repeat(num);

  // shorter:
  
  num > 0 ? str.repeat(num) : "";

}

console.log(repeatStringNumTimes("abc", 3));





// Intermediate Code Solution:

// This solution uses recursion.
// We check if num is negative and return an empty string if true.
// Then we check if it’s equal to 1 and in that case we return the string itself.
// If not, we add the string to a call of our function with num being decreased by 1, 
// which will add another str and another… until eventually num is 1. And return that whole process.
function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}




// Advanced Code Solution:

function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);