# Introduction

get closest word for a specific word from given set of word list

# installation

`npm i close-word --save`

## Code sample  to find closest word

```js
var word_finder = require('close-word')

var result  = word_finder.findClosestOne('newyork',['new york','new delhi','kandy','paris','new jersey','london','colombo','jafna']);
 
console.log(result); // result =  { word: 'new york', score: 440.9090909090909 }


```

## Code sample  to find 5 closest words
```js
var word_finder = require('close-word');

var result  = word_finder.findClosestFive('newyork',['new york','new delhi','kandy','paris','new jersey','london','colombo','jafna']);

console.log(result);
/*
 result  =  [
  { word: 'new york', score: 440.9090909090909 },
  { word: 'new jersey', score: 216.39344262295083 },
  { word: 'new delhi', score: 166.39344262295083 },
  { word: 'london', score: 116.39344262295083 },
  { word: 'kandy', score: 114.08450704225352 }
]

```

## Code sample  to find any number closest words  according to the 3rd param you given to the function.in this case 3
```js
var word_finder = require('close-word');

var result  = word_finder.findClosestAny('newyork',['new york','new delhi','kandy','paris','new jersey','london','colombo','jafna'], 3 );

console.log(result);
/*
 result  =  [
  { word: 'new york', score: 440.9090909090909 },
  { word: 'new jersey', score: 216.39344262295083 },
  { word: 'new delhi', score: 166.39344262295083 }
]

```




# if lib gives a word with very low score ,filter them from ur code using a threshold value