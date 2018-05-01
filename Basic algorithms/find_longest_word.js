// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  
  var longest = 0;
  
  array = str.split(" ");
  
  for (var i = 0; i < array.length; i++){
    
    if (array[i].length > longest) {
      
        longest = array[i].length;
    
    }
    
  }
  
  return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));






//Intermediate Code Solution:B
Using .reduce()

function findLongestWord(s) {
  return s.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0);
}






// Advanced Code Solution:
// Using recursiveness

function findLongestWord(str) {

  //split the string into individual words 
  //(important!!, you'll see why later)
  str = str.split(" ");

  //str only has 1 element left that is the longest element, 
  //return the length of that element
  if(str.length == 1){
    return str[0].length;
  }

  //if the first element's length is greater than the second element's (or equal) 
  //remove the second element and recursively call the function)
  if(str[0].length >= str[1].length){
    str.splice(1,1);
    return findLongestWord(str.join(" "));
  }

  //if the second element's length is greater thant the first element's start 
  //call the function past the first element 
  if(str[0].length <= str[1].length){
    // from the first element to the last element inclusive.
    return findLongestWord(str.slice(1,str.length).join(" "));
  }
}