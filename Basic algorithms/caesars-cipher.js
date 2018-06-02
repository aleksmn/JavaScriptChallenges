// Caesars Cipher

// You need to write a function, which will take a string encoded with Caesar cipher as a parameter and decode it.
// The one used here is ROT13 where the value of the letter is shifted by 13 places
// You have to shift it back 13 positions, such that ‘N’ <=> ‘A’.


function rot13(str) {

  // Replace every letter using function

  return str.replace(/[A-Z]/g, replacer);

  function replacer(letter){
    
    return String.fromCharCode((letter.charCodeAt(0) % 26) + 65)

    // For example: 
    // 65('A') % 26 = 13, 13 + 65 = 78('N');
    // 78('N') % 26 = 0, 0 + 65 = 65('A');

  };
  

}


console.log(rot13("LBH QVQ VG!"));









// Basic Solution:


function rot13(str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map.call(str, function(char) {
      // Convert char to a character code
      x = char.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}

/* A string variable nstr is declared and initialized to store the decoded string.
The for loop is used to loop through each character of the input string.
If the character is not uppercase English alphabets(i.e. its ascii doesn’t lie between 65 and 91 ), we’ll leave it as it is and continue 54 with next iteration.
If it’s the uppercase English alphabet, we’ll subtract 13 from it’s ascii code.
If the ascii code is less than 78, it’ll get out of range when subtracted by 13 so we’ll add 26 (number of letters in English alphabets) to it so that after A it’ll go back to Z.  */



// Advanced Code Solution:

function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

/* Algorithm Explanation:

Understanding modulo operator (sometimes called modulus operator) symbolically represented as % in JavaScript is key to understanding the algorithm.
This is an interesting operator which shows up in various places of Engineering e.g. in cryptography.

Basically, operated on a number, it divides the number by the given divisor and gives the remainder of the division.
For Example,

0 % 5 = 0 because 0 / 5 = 0 and the remainder is 0.
2 % 5 = 2 because 2 / 5 = 0 and the remainder is 2
4 % 5 = 4 because 4 / 5 = 0 and the remainder is 4
 
5 % 5 = 0 because 5 / 5 = 1 and the remainder is 0
7 % 5 = 2 because 7 / 5 = 1 and the remainder is 2
9 % 5 = 4 because 9 / 5 = 1 and the remainder is 4
 
10 % 5 = 0 because 10 / 5 = 2 and the remainder is 0
But you must have noticed a pattern here.
As you might have noticed, the amazing modulo operator wraps over the LHS value when it just reaches multiples of the RHS value.
e.g. in our case, when LHS = 5, it wrapped over to 0
OR
when LHS = 10, it wrapped over to 0 again.

Hence, we see the following pattern emerging

 0 ⇔ 0
 1 ⇔ 1
 2 ⇔ 2
 3 ⇔ 3
 4 ⇔ 4
 5 ⇔ 0
 6 ⇔ 1
 7 ⇔ 2
 8 ⇔ 3
 9 ⇔ 4
10 ⇔ 0
Hence, we conclude that using modulo operator, one can map a range of values to a range between [0 to DIVISOR - 1]. In our case, we mapped [5 - 9] between [0 - 4] or mapped [6 - 10] between [0 - 4].

Did you understand till this?

Now let us consider mapping a range of 26 numbers i.e. between [65 - 90] (which represents uppercase English alphabets 17 in Unicode character set 46) to a range of numbers between [0 - 25].

[A]  65 % 26 ⇔ 13
[B]  66 % 26 ⇔ 14
[C]  67 % 26 ⇔ 15
[D]  68 % 26 ⇔ 16
[E]  69 % 26 ⇔ 17
[F]  70 % 26 ⇔ 18
[G]  71 % 26 ⇔ 19
[H]  72 % 26 ⇔ 20
[I]  73 % 26 ⇔ 21
[J]  74 % 26 ⇔ 22
[K]  75 % 26 ⇔ 23
[L]  76 % 26 ⇔ 24
[M]  77 % 26 ⇔ 25
[N]  78 % 26 ⇔  0
[O]  79 % 26 ⇔  1
[P]  80 % 26 ⇔  2
[Q]  81 % 26 ⇔  3
[R]  82 % 26 ⇔  4
[S]  83 % 26 ⇔  5
[T]  84 % 26 ⇔  6
[U]  85 % 26 ⇔  7
[V]  86 % 26 ⇔  8
[W]  87 % 26 ⇔  9
[X]  88 % 26 ⇔ 10
[Y]  89 % 26 ⇔ 11
[Z]  90 % 26 ⇔ 12
As you can notice, each number in the range of [65 - 90] maps to a unique number between [0 - 25].
You might have also noticed that each given number (e.g. 65) maps to another number (e.g. 13) which can be used as an offset value (i.e. 65 + OFFSET) to get the ROT13 of the given number.

E.g. 65 maps to 13 which can be taken as an offset value and added to 65 to give 78.

[A]  65 % 26 ⇔ 13 + 65 =  78 [N]
[B]  66 % 26 ⇔ 14 + 65 =  79 [O]
[C]  67 % 26 ⇔ 15 + 65 =  80 [P]
[D]  68 % 26 ⇔ 16 + 65 =  81 [Q]
[E]  69 % 26 ⇔ 17 + 65 =  82 [R]
[F]  70 % 26 ⇔ 18 + 65 =  83 [S]
[G]  71 % 26 ⇔ 19 + 65 =  84 [T]
[H]  72 % 26 ⇔ 20 + 65 =  85 [U]
[I]  73 % 26 ⇔ 21 + 65 =  86 [V]
[J]  74 % 26 ⇔ 22 + 65 =  87 [W]
[K]  75 % 26 ⇔ 23 + 65 =  88 [X]
[L]  76 % 26 ⇔ 24 + 65 =  89 [Y]
[M]  77 % 26 ⇔ 25 + 65 =  90 [Z]
[N]  78 % 26 ⇔  0 + 65 =  65 [A]
[O]  79 % 26 ⇔  1 + 65 =  66 [B]
[P]  80 % 26 ⇔  2 + 65 =  67 [C]
[Q]  81 % 26 ⇔  3 + 65 =  68 [D]
[R]  82 % 26 ⇔  4 + 65 =  69 [E]
[S]  83 % 26 ⇔  5 + 65 =  70 [F]
[T]  84 % 26 ⇔  6 + 65 =  71 [G]
[U]  85 % 26 ⇔  7 + 65 =  72 [H]
[V]  86 % 26 ⇔  8 + 65 =  73 [I]
[W]  87 % 26 ⇔  9 + 65 =  74 [J]
[X]  88 % 26 ⇔ 10 + 65 =  75 [K]
[Y]  89 % 26 ⇔ 11 + 65 =  76 [L]
[Z]  90 % 26 ⇔ 12 + 65 =  77 [M]
Code Explanation:
String.prototype.replace function 37 lets you transform a String based on some pattern match (defined by a regular expression), and the transformation function 59 (which is applied to each of the pattern matches).
Arrow function 158 syntax is used to write the function parameter to replace().
L represents a single unit, from every pattern match with /[A-Z]/g - which is every uppercase letter in the alphabet, from A to Z, present in the string.
The arrow function applies the rot13 transform on every uppercase letter from English alphabet present in the given string.

*/