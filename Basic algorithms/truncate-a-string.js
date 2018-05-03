/* Truncate a string 

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string. */



function truncateString(str, num) {
  // Clear out that junk in your trun
  
  if (num >= str.length) {
    return str;
  }
  
  if (num <= 3) {
    return str.slice(0, -(str.length - num)) + '...';
  }
  
  return str.slice(0, -(str.length - (num - 3))) + '...';
  
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));





// Advanced Code Solution:


function truncateString(str, num) {
  if (str.length > num)
    return str.slice(0, num > 3 ? num-3 : num) + '...';
  return str;
}


/* Code Explanation:
We start by writing an if-statement that checks if the length of the string in the first argument is greater than the size limit. If so we need to use the “slice” method to extract a section of the string and return it as a new string. Here we pass 0 as the starting point for our slice. To determine the endpoint, we use a ternary operator: num > 3 ? num - 3 : num. In our ternary, if num is larger than 3, we must factor in the three dots to our total length, and thus we end our slice at num-3. If num is less than or equal to 3, our slice gets an end variable of just num. Finally, the '...' is appended to the end of our new string and is returned.function.
if (str.length > num)
    return str.slice(0, num > 3 ? num-3 : num) + '...';
If our if statement above fails, the program will skip over it including the return statement. In this case we are able to skip a follow-up “else” statement and return the original string.
return str;
NOTE In order to understand the above code, you need to understand how a Ternary Operator works. The Ternary Operator is frequently used as a shortcut for the if statement and follows this format: condition ? expr1 : expr2. If the condition evaluates to true, the operator returns the value of expr1. Otherwise, it returns the value of expr2. */