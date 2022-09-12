'use strict';

/* Comment & Log

  Add comments and logs to help a developer understand this program

*/

let first = 'Pieter'; // declare, init and value is Pieter 
let last = 'Rabbit'; // declare, init and value is Rabbit

let fullName = first + ' ' + last; // read (first) and value is Pieter 
                                   // read (last) and value is  Rabbit
                                   // declare, init (fullName) and value is Pieter Rabbit
console.log(fullName); // read (fullName) and value is Pieter Rabbit

let greeting = 'hello ' + fullName; // read (fullName) and value is Pieter Rabbit
                                    // declare, init (greeting) and value is hello Pieter Rabbit
greeting = 'good bye ' + fullName; // read (fullName) and value is Pieter Rabbit
                                   // assign (greeting) and value is good bye Pieter Rabbit
console.log(greeting); // read (greeting) and value is good bye Pieter Rabbit 
