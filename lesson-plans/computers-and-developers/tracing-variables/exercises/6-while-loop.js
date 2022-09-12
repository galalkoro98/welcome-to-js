'use strict';

let a = '*'; // declare, init and value is * 
// let a = '<>';
// let a = '|-|';
// let a = '';

let b = '';  // declare, init and value is nothing 
while (b.length < a.length * 3) { // read b  and value is nothing
                                  // read a and value is  *
  b = b + a; // read b and value is nothing 
            // read a nad value is * 
}

console.log(b);
 /* line 9 will continue loop until
  we get that value of b not less than a
  After completing the passes, the condition b < 3 is no longer true, so the loop terminates.
  and then we read b and value is ***

   */