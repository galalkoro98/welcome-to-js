'use strict';

console.log('--- in execution phase ---');

/*
  environment: browser

  name: ReferenceError
  message: welf is not defined

  location: Line 20 colum 6

  life cycle: exucution phase 

  the mistake: declaration, init

  the fix(es): let/var
*/

let welf = 'ingrad';

console.log(welf);
