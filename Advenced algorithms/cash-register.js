// Cash Register

/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. */

function checkCashRegister(price, cash, cid) {
  var change;
  var status = "OPEN";
  // Here is your change, ma'am.

  // list of currency denominations
var currency_units = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];
// Get change value
change = cash - price;

// Make a register object and get total cash amount
var register = cid.reduce(function(accumulator, current) {
  accumulator.total += current[1];
  accumulator[current[0]] = current[1];
  return accumulator;
}, {total:0});

// Get the status if change equal to tota cash in register
if(register.total === change) {
  status = 'CLOSED';
}
// Get the status if there is not enough cash in the register
if(register.total < change) {
  status = 'INSUFFICIENT_FUNDS';
  
}

// Get the change amount, loop through currency list
var my_change = currency_units.reduce(function(accumulator, current){
  var value = 0;
  while(register[current.name] > 0 && change >= current.val){
    change -= current.val;
    register[current.name] -= current.val;
    value += current.val;

    // Round the change to the nearest hundreth
    change = Math.round(change * 100) / 100;
  }

  if(value > 0) {
    accumulator.push([current.name, value]);
  }
  
  return accumulator;
}, []);


if(my_change.length < 1 || change > 0) {
  status = 'INSUFFICIENT_FUNDS';
}

register.total = Math.round(register.total * 100) / 100;



if (status === 'INSUFFICIENT_FUNDS') {my_change = [];}
if (status === 'CLOSED') {my_change = cid;}

var result = {};

result.status = status;
result.change = my_change;

return result;

}

var a = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

console.log(a);




