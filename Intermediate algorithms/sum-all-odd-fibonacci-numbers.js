// Sum All Odd Fibonacci Numbers

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.



function sumFibs(num) {
  var prev = 0;
  var curr = 1;
  var fibbonacci = [0];
  var result = 0;
  
  while (curr <= num) {

    if(curr % 2 !== 0) {
      
      result += curr;
    }
    
    curr = prev + curr;
    prev = curr - prev;
   
    //Fibonacci numbers  
    fibbonacci.push(prev);
  }
  
  console.log(fibbonacci); 
  return result;
}

sumFibs(1000);




// Intermediate Code Solution:

function sumFibs(num) {
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }

  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) {
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });

  return res;
}

// test here
sumFibs(4);


// Code Explanation:
// Create an array of fibonacci numbers till num.
// Use reduce() method to find the sum of odd members of array.
// Return the sum.