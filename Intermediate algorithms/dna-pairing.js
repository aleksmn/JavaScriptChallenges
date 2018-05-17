// DNA Pairing

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.


function pairElement(str) {
  var result = [];
  
  function search(char) {

    switch (char) {
      case 'A':
        result.push(['A','T']);
        break;
        
      case 'T':
        result.push(['T','A']);
        break;
        
      case 'C':
        result.push(['C','G']);
        break;
        
      case 'G':
        result.push(['G','C']);
        break;
    }
  
  }
  
  for (var i = 0; i < str.length; i++) {
    
    search(str[i]);
    
  } 
  
  return result;
}

pairElement("ATCGA");


/**********************/

// Intermediate Code Solution:

function pairElement(str) {
  //define a map object with all pair possibilities 
  var map = {T:'A', A:'T', G:'C', C:'G'};
  //split str into a char Array
  strArr = str.split('');
  //replace each Array item with a 2d Array using map
  for (var i = 0; i < strArr.length; i++){
    strArr[i] = [strArr[i], map[strArr[i]]];
  }
 return strArr;
}

// test here
pairElement("GCG");


// Code Explanation:
// First define an object with all pair possibilities, this allows us to easily find by key or value.
// Split str into a characters array so we can use each letter to find its pair.
// Use a loop to go throw the array of characters and replace each character by an array of the pair, thus creating 2d arrays.