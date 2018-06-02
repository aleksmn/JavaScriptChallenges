// Check for Palindromes


function palindrome(str) {
  
  // Replace all non-word characters and '_' with ''.
  // \W is equivalent to [^A-Za-z0-9_] and means 
  // all besides letters, numbers and '_'.

  var newStr = str.replace(/[\W_]/g,'').toLowerCase().split('').reverse().join('');
  
  str = str.replace(/[\W_]/g,'').toLowerCase();
   
  return str === newStr;
  
}

console.log(palindrome("A man, a plan, a canal. Panama"));



/************************************/



// Intermediate Code Solution (from freecodecamp):

function palindrome_2(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  for(var i = 0, len = str.length - 1; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome_2("_eye"));

/* Code Explanation:
We start by using the same methods of replacing characters we don’t want in the string using RegEx's, regular expressions, and then make our string lowercase.

Next we set up our for loop and declare an index i to keep track of the loop. We set our escape sequence to when i is greater than the length of the string divided by two, which tells the loop to stop after the halfway point of the string. And finally we set i to increment after every loop.

Inside of each loop we want to check that the letter in element [i] is equal to the letter in the length of the string minus i, [str.length - i]. Each loop, the element that is checked on both sides of the string moves closer to the center until we have checked all of the letters. If at any point the letters do not match, we return false. If the loop completes successfully, it means we have a palindrome and therefore we return true! */




/******************************/



// Advanced Code Solution (most performant):

//this solution performs at minimum 7x better, at maximum infinitely better.
//read the explanation for the reason why. I just failed this in an interview.
function palindrome_3(str) {
  //assign a front and a back pointer
  let front = 0;
  let back = str.length - 1;

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    while ( str[front].match(/[\W_]/) ) {
      front++;
      continue;
    }
    //decrements back pointer if current character doesn't meet criteria
    while ( str[back].match(/[\W_]/) ) {
      back--;
      continue;
    }
    //finally does the comparison on the current character
    if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
    front++;
    back--;
  }
  
  //if the whole string has been compared without returning false, it's a palindrome!
  return true;

}

console.log(palindrome_3("A man, a plan, a canal. Panama"));