'use strict';

console.log('====Task 1====');

function fillArray (length, item) {

    let array = [...Array(length)];

    for (let i = 0; i < array.length; i++) {
        array[i] = item; 
    }

    return array;
}

console.log(fillArray(10, 'qwerty'));

console.log('====Task 2====');

let someArray = [0, 1, 2, null, undefined, 'qwerty', false];

function includeArray(...args) {
    let total = args;
    return total;
}

let result = includeArray(false, undefined, '', 0, null); 

function filterArray(item) {
    return !result.includes(item);
}

someArray = someArray.filter(filterArray);
console.log(someArray);

console.log('====Task 3====');

function calcSum(a, b, ...args) {
    
    let result = a + b;
    if (b === undefined) {
        return 0;
    }
    for (let arg of args) {
      result += arg;
    }

    return result;
  }

  let sum1 = calcSum(0);
  let sum2 = calcSum(1, 2, 3); 
  let sum3 = calcSum(5, 0, 10, 1, 5);

  console.log(sum1);
  console.log(sum2);
  console.log(sum3);

console.log('====Task 4====');

function createPipe(symbol) {
    symbol = '=====';
    return function (string) {
        return `${symbol} ${string} ${symbol}`;
    };
  }

  const pipeFunction = createPipe();
  result = pipeFunction('some text you like');
  console.log(result);

console.log('====Task 5====');

function makeText(text = 'Hello', func = console.log(`${text}`)) {
    return func, text;
}
alert(makeText());
