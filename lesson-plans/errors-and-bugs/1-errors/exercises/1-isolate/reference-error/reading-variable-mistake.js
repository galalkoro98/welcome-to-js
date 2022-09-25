'use strict';

console.log('--- in execution phase ---');

/*
  environment: browser 

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  location: line 20 colum 13

  life cycle:execution phase

  the mistake: the mistake was reading variable  before was declare and int 

  the fix(es):read decare and int before reading 
*/



let tomatoes = 'fresh';
console.log(tomatoes);
