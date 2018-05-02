// Confirm the Ending Challenge


// Basic Code Solution:

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}


/* Code Explanation:
The substr() method returns the characters in a string beginning at the specified location through the optional specified number of characters. substr operates through the end of the string if the second optional parameter is not specified. substr() calculates the index of first matching character from the string’s end if the specified location is negative. Using the - operator in front of target.length makes it negative.

We use the method substr() with the negative value of target's length to extract the ending segment of str of the same size as target, compare it to target, and then return the value of this boolean expression. */





// My solution

function confirmEnding(str, target) {

  // Find ending simbols equal to target length.
  var ending = str.substring(str.length - target.length);
  
  
  return ending === target;
}

console.log(confirmEnding("Bastian", "n"));


