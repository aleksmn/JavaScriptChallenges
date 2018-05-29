/* Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object. */


var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly

var fullName = firstAndLast;

//   this.getFullName = function() {
//       return fullName;
//  };

this.getFullName = () => fullName;

this.getFirstName = () => fullName.split(" ")[0];

this.getLastName = () => fullName.split(" ")[1];

  
this.setFirstName = (name) => {
  
  fullName = name + " " + fullName.split(" ")[1];
};

this.setLastName = (name) => {
  
  fullName = fullName.split(" ")[0] + " " + name;
};

this.setFullName = (name) => {
  
  fullName = name;
};



};

var bob = new Person("Bob Ross");


bob.getLastName();
