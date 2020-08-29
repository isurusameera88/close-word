var word_finder = require('./close-word.js')


var result  = word_finder.findClosestFive('newyork',['new york','new delhi','kandy','paris','new jersey','london','colombo','jafna']);

console.log(result);


var result  = word_finder.findClosestOne('newyork',['new york','new delhi','kandy','paris','new jersey','london','colombo','jafna']);
 
console.log(result);


var result  = word_finder.findClosestAny('newyork',['new york','new delhi','kandy','paris','new jersey','london','colombo','jafna'],3);
 
console.log(result);
