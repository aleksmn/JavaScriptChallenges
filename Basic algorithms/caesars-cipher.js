// Caesars Cipher

// You need to write a function, which will take a string encoded with Caesar cipher as a parameter and decode it.
// The one used here is ROT13 where the value of the letter is shifted by 13 places
// You have to shift it back 13 positions, such that ‘N’ <=> ‘A’.


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

// More solutions at: 
// https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-caesars-cipher/16003
