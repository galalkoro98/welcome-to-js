'use strict';

console.log('--- in execution phase ---');

/*
  environment: browser 

  name:SyntaxError
  message:Identifier 'tree' has already been declared

  location:line 22 colum 8

  life cycle: creation phase 

  the mistake: was declared two times 

  the fix(es): remove the variable that declared 
*/

let tree = 'oak';

 tree = 'birch';

 console.log(tree);
