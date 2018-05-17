// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  
  var arr = [];
  
  for (var i = str.charCodeAt(0); i <= str.charCodeAt(str.length-1); i++) {
    
    if (str.indexOf(String.fromCharCode(i)) < 0) {
      return String.fromCharCode(i);
    }
    
//     arr.push(i);
    
  }
  
//   return arr;
  
//   return str.charCodeAt(str.length-1);
}

fearNotLetter("abce");





// Basic Code Solution:
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    // code of current character
    var code = str.charCodeAt(i);

    // if code of current character is not equal to first character + no of iteration
    // hence character has been escaped
    if (code !== str.charCodeAt(0) + i) {

    // if current character has escaped one character find previous char and return 
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}

// test here
fearNotLetter("abce");




// Intermediate Code Solution:

// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");




// Advanced Code Solution:

function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');

  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

// test here
fearNotLetter("abce");


/* A new string allChars is created.
Create a regular expression notChars which selects everything except str.
The for loop is used to add all the letters in the range to allChars.
match() is used to strip off the str letters from the newly created string and it is returned.
If there are no missing characters, return undefined. */