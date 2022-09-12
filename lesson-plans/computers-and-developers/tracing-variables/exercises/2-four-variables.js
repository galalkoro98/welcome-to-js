'use strict';

/* Four Variables

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// trace the program a few times with different values

let a = 'Pieter'; // declare, init
// let a = 'Blake';
// let a = 'George';

let b = 'Rabbit'; // declare, init
// let b = 'Wozzeck';
// let b = 'Schoenberg';

let c = a + ' ' + b; // read (a) and value is Pieter 
                     // read (b) and value is  Rabbit 
                     // declare, init c and value is Pieter Rabbit

let d = 'hello ' + c; // read (c) and value is Pieter Rabbit 
                      // declare, init (d) and value is hello Pieter Rabbit 

console.log(d); // read (d) and the result is hello Pieter Rabbit 

d = 'good bye ' + c; // read (c) and value is Pieter Rabbit
                     // assign (d) and value is good bye Pieter Rabbit 

console.log(d); // read (d) and value is good bye Pieter Rabbit 

