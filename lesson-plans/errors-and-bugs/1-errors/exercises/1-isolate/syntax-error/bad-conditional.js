

'use strict';

console.log('--- in execution phase ---');


/*
  environment: browser 

  name: SyntaxError
  message: Unexpected token '{'

  location: line 27 colum 30, 

  life cycle:excustion phase 

  the mistake: was you can't use else with condition 

  the fix(es): changing else to else if
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


