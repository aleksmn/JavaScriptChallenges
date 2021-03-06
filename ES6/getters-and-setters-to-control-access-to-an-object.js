function makeClass() {
  "use strict";
  /* Alter code below this line */

  class Thermostat {
    constructor(fahrenheit) {
      this._temperature = 5/9 * (fahrenheit - 32);
    }

    get temperature(){
      return this._temperature;
    }  

    set temperature(updatedTemperature){
      this._temperature = updatedTemperature;
    }  

  }

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C