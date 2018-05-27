// Validate US Telephone Numbers

// Return true if the passed string is a valid US phone number.
// The user may fill out the form field any way they choose as long as it is a valid US number.

function telephoneCheck(str) {
  
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  
  return regex.test(str);
}

telephoneCheck("1 555 555 5555");

/* 
Code Explanation:
^ denotes the beginning of the string (1\s?)? checks allows for a “1” or a "1 " at the beginning.
\d{n} checks for exactly n number of digits so (\(\d{3}\)|\d{3}) checks for three digits that are allowed to be between parenthesis.
[\s\-]? checks for spaces or dashes between the groups of digits.
$ denotes the end of the string. In this case the beginning and end of the string are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 a”).
Lastly we use regex.test(str) to test if the string adheres to the regular expression and return true or false. */
