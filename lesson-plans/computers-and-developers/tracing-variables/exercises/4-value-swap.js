'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

let a = 'y'; // declare, init  (a) and value is y
let b = 'x'; // declare, init  (b) and value is x
let t = ''; // declare, init  (t) and value is empty string which is nothing 

console.log(a, b, t); // read (a) and value is y
                     // read (b) and value is x
                    // read (t) and value is empty string ......

t = a; // read (a) and value is y
      // assign (a) to (t) which has  value is y
a = b; // read (b) and value is x
      // assign (b) to (a) which has  value is x
b = t; // read (t) and value is  y 
      // assign (t) to (b) and value is y

console.log(a, b, t); // read (a) and value is x 
                      // read (b) and value is y
                      // read (t) and value is y

// what did you do in this program?
//  what are the final values of `a` and `b`?
//  how are they changed from the initial values

// is it possible two swap a and b without using t?
