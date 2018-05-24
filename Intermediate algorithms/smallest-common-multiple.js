// Smallest Common Multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.



// Intermediate Code Solution:

function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  // Implements the Euclidean Algorithm
  function gcd(x, y) {   
  if (y === 0)
      return x;
  else
      return gcd(y, x%y);
  }
}

// test here
smallestCommons([1,5]);

/* 
Code Explanation:
The first, basic solution requires over 2,000 loops to calculate the test case smallestCommons([1,13]), and over 4 million loops to calculate smallestCommons([1,25]). This solution evaluates smallestCommons([1,13]) in around 20 loops and smallestCommons([1,25]) in 40, by using a more efficient algorithm.
Make an empty array range.
All numbers between the given range are pushed to range using a for loop.
The next block of code implements the Euclidean algorithm, which is used for finding smallest common multiples. */





// Advanced Code Solution:

function smallestCommons(arr) {
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    var grandLCM;

    for (var i=min; i<max; i++) {
        if(i===min){
            grandLCM = (i * (i+1))/gcd(i, i+1);
        }else{
            grandLCM = (grandLCM * (i+1))/gcd(grandLCM, i+1);
        }
    }

    return grandLCM;

    function gcd(x, y) {    // Implements The Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);

/* Code Explanation:
Get the minimum (min) and maximum (max) in the arr.
Variable grandLCM will hold our final result.
In a single loop, iterate from min to max-1.
In each iteration: if first iteration, compute the lcm of current and next number in range and hold intermediate result in grandLCM else compute the lcm of previous intermediate result and next number in range. */