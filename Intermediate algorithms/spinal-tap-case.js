// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  
  var re = /\s|_/; 
  
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  str = str.split(re).join('-').toLowerCase();
  
  return str;
}

spinalCase('thisIsSpinalTap');





// Intermediate Code Solution:

function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

// test here
spinalCase('This Is Spinal Tap');






// Advanced Code Solution:

function spinalCase(str) {

  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

/* Split the string at one of the following conditions (converted to an array)
a whitespace character [\s] is encountered
underscore character [_] is encountered
or is followed by an uppercase letter [(?=[A-Z])]
Join the array using a hyphen (-)
Lowercase the whole resulting string */