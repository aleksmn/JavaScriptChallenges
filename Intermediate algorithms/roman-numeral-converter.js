/* Roman Numeral Converter
Convert the given number into a roman numeral. */


var convertToRoman = function(num) {

  var lookupTable = [
    {'decimal': 1000, 'roman': 'M'},
    {'decimal': 900,  'roman': 'CM'}, 
    {'decimal': 500,  'roman': 'D'}, 
    {'decimal': 400,  'roman': 'CD'}, 
    {'decimal': 100,  'roman': 'C'}, 
    {'decimal': 90,   'roman': 'XC'}, 
    {'decimal': 50,   'roman': 'L'},
    {'decimal': 40,   'roman': 'XL'},
    {'decimal': 10,   'roman': 'X'},
    {'decimal': 9,    'roman': 'IX'},
    {'decimal': 5,    'roman': 'V'},
    {'decimal': 4,    'roman': 'IV'},
    {'decimal': 1,    'roman': 'I'},
  ];

  var toRoman = '';

  for (var i = 0; i < lookupTable.length; i++) {
    while (lookupTable[i]['decimal'] <= num) {
      toRoman += lookupTable[i]['roman'];
      num -= lookupTable[i]['decimal'];
    }
  }

  return toRoman;
}


console.log(convertToRoman(36));
