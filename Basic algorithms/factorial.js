// Return the factorial of the provided integer.

// Solution 1 with recursion

function factorialize(num) {
  
  if (num === 0) { return 1; }

  return num * factorialize(num - 1);

  // Example: (5*(4*(3*(2*1))))
  
}

console.log("Function #1 " + factorialize(5));


// Solution 2

function factorialize_2(num) {

  for (var a = 1; num >= 1; num--) {

    a = num * a;
   
    // Example:
    // a = 5 * 1,
    // a = 4 * (5 * 1),
    // a = 3 * (4 * (5 * 1),
    // a = 2 * (3 * (4 * (5 * 1)),
    // a = 1 * (2 * (3 * (4 * (5 * 1))),
  }

  return a;
}

console.log("Function #2 " + factorialize_2(5));

// Solution 3

function factorialize_3(num) {
  
  var ans = 1;
  
  for (var i = 1; i <= num; i++) {
    
    ans = ans * i; 
    
  }
  
  return ans;
}

console.log("Function #3 " + factorialize_3(5));