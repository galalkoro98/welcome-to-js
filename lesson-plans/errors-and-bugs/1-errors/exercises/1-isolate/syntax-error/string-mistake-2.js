

'use strict';

console.log('--- in execution phase ---');


/*
  environment: browser 

  name: SyntaxError
  message: Unexpected string

  location: line 23 colum 44

  life cycle: creation phase 

  the mistake: was can not use multyple single quote on same line 

  the fix(es): remove the single quote and add double quote 
*/

const quotesInQuotes = 'remind yourself "i can do this!" at least once a day';
console.log(quotesInQuotes);


