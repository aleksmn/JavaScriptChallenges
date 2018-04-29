// Reverse the provided string.

function reverseString(str) {
  
  // Turn string into an array with split("")
  // reverse and join into string.

  str = str.split("").reverse().join("");
  
  return str;
}

console.log(reverseString("Привет всем!"));