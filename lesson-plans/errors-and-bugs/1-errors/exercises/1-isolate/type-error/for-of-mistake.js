'use strict';

console.log('--- in execution phase ---');

/*
  environment:browser 

  name:TypeError
  message: maxNumber is not iterable

  location:line 22 colum 17

  life cycle: execution phase 

  the mistake: was trying to itrate somthing that is not itratble 

  the fix(es): assign a string/ arry to mxaNumber
*/

const maxNumber = [];

for (const i of maxNumber) {
  console.log(i); // 0, 1, 2, 3, 4, 5
}
