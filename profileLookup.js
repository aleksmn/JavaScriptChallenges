
// The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.


var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["Javascript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(firstName, prop){


for (var i = 0; i < contacts.length; i++) {
  
  if (contacts[i].firstName == firstName) {
    
    // return contacts[i].firstName;
      
    if (contacts[i].hasOwnProperty(prop)) {

      return contacts[i][prop];

    } else {

      return "No such property";
    }
 
    
  }
}

return "No such contact";

}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));