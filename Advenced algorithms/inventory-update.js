// Inventory Update

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.


function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

var index;


var getIndex = function(name) {
  
  for (var i = 0; i < this.length; i++) {
    if (this[i][1] === name) {
      return i;
    }
  }
  
  return undefined;
  
};

for (var i = 0; i < arr2.length; i++) {
  
  index = getIndex.call(arr1, arr2[i][1]);
  
  if (index === undefined) {
    
    arr1.push(arr2[i]);
  }
  
  else {
    
    arr1[index][0] += arr2[i][0];
  }
  
}

arr1.sort(function(a, b){
  
  if (a[1] > b[1]) {
    return 1;
  }
  
  if (a[1] < b[1]) {
    
    return -1;
  }
  
  return 0;
});

return arr1;

}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);



// Advanced Code Solution:

function updateInventory(arr1, arr2) {
  var flag = 0;
  arr2.forEach(function(item) {
    flag = 0;
    arr1.forEach(function(list) {
      // If the product is already present, increase the quantity
      if(item[1] === list[1]) {
        list[0] += item[0];
        flag = 1;
      }
    });
    //If not already present, add the product
    if(flag === 0)
      arr1.push(item);
  });

  //Return the sorted inventory in alphabetical order by product name
  return arr1.sort(function(a, b) {
    return a[1] > b[1] ? 1 : -1;
  });
}

// test here
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

/* Code Explanation:
The variable flag is a flag variable which checks whether a product exists in the inventory. A flag variable, in its simplest form, is a variable you define to have one value until some condition is true, in which case you change the variable’s value.
arr2.forEach(function(item)) iterates through each item in the new delivery:
If the product is already present, it’s quantity is simply updated and flag is made 1.
If the product is new i.e., flag is 0, it is added to the inventory using the push() method.
The updated array arr1 is then sorted alphabetically by product name. */