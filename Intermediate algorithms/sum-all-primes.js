// Sum All Primes

// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.



function sumPrimes(num) {

  var primes = [];
  var sumOfPrimes = 0;
  
  function isPrime (n) {
    if (n < 2) return false;

    // An integer is prime if it is not divisible 
    // by any prime less than or equal to its square root.

    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
  }
  
  for (var i = 0; i <= num; i++) {
    
    if(isPrime(i)) {
      primes.push(i);
      sumOfPrimes += i;
    }
  }
  
    
  return sumOfPrimes;
}

sumPrimes(10);



// Advanced Code Solution:

function sumPrimes(num) {
  // step 1	
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
  // step 2
  let onlyPrimes = arr.filter( (n) => { 
    let m = n-1;
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false;
        m--;
    }
      return true;
  });
  // step 3
  return onlyPrimes.reduce((a,b) => a+b); 
}
// test here
sumPrimes(977);


/* Code Explanation:
Step 1: Use Array.from() to generate a sequence of numbers up to and including num. Combine with .slice() to slice off first two indices [0, 1] since all prime numbers must be greater than 1.
Step 2: Filter all numbers off of arr that are not prime by subjecting each element to the “trial division test” which “consists of dividing n by each integer m that is greater than 1 and less than or equal to the square root of n”. This test returns false if any number less than the element being operated on (m) produces no remainder when said element (n) is divided by it. See link below for more on this.
Step 3: Return the sum of all remaining elements of arr using .reduce(). */