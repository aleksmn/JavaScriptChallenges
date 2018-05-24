/* Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation. */


function truthCheck(collection, pre) {
  // Is everyone being true?
  
  for(var i = 0; i < collection.length; i++) {
    if (!Boolean(collection[i][pre])){
        
      return false;
    }
    
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "sdf"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");






// Intermediate Code Solution:

// Using Array.every()

function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");




// Advanced Code Solution:

// using Arrow function

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/* For every object in the collection array, check the truthiness of object’s property passed in pre parameter
Array#every method internally checks if the value returned from the callback is truthy.
Return true if it passes for every object. Otherwise, return false. */