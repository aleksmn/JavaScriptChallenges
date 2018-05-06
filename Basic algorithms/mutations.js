// Mutations 

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  
  var firstStr = arr[0].toLowerCase();
  var secondStr = arr[1].toLowerCase();
  var count = 0; 
  
  console.log(secondStr.length);
  
  while (count < secondStr.length) {
    
    if (firstStr.indexOf(secondStr[count]) < 0) { 
         
      return false;  
    } 
    count++;
  }
  return true;
}

mutation(["hello", "hey"]);




// Basic Code Solution:
// Procedural

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) === -1)
      return false;
  }
  return true;
 }
// Code Explanation:
// First we make the two strings in the array lowercase. test will hold what we are looking for in target.
// Then we loop through our test characters and if any of them is not found we return false.
// If they are all found, the loop will finish without returning anything and we get to return true.




// Intermediate Code Solution:
// Declarative

function mutation(arr) {
  // Grab the second string, lowercase and turn it into an array; 
  //then make sure every one of its letters is a part of the lowercased first string.
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) !== -1;
    });
}

// Every will basically give you letter by letter to compare, which we do by using 
//indexOf on the first string. indexOf will give you -1 if the current letter is missing. 
//We check that not to be the case, for if this happens even once every will be false.
