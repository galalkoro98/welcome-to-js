'use strict';

console.log('--- in execution phase ---');

/*
  environment: Browser

  name: ReferenceError
  message:  Cannot access 'isValidUserName' before initialization

  location:line 24 colum 19

  life cycle: execution phase

  the mistake: the mistake was using a variable before it was declared 

  the fix(es):  declare the variable before using it 
*/

const userName = 'chiobin';

console.log('userName:', typeof userName, userName);
let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true;
}



if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
