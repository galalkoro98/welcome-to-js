'use strict';

let a = 'Ewin'; // declare, init (a) and value is Ewin
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

<<<<<<< HEAD
let b = 'Hello ' + a + ', your a is '; // read (a) and value is (Ewin)
                                       // declare, init (b) and value is hello Ewin , your a is 
=======
let b = 'Hello ' + a + ', your name is ';
>>>>>>> d9e38ed9d933eac455b73462f932e88593929992

if (a.length > 4) {  /* read (a) in this condition and a length is not bigger than (4)
                       because Ewin equal to 4 so we go to next statement which is else if
                       */
  b = b + 'long.';
} else if (a.length === 4) { // read (a) so here the length of (a) is a strict equality to 4 
  b = b + 'perfect.'; // read (b) and value is hello Ewin, your a is 
                      // assign (b) and value is hello Ewin, your a is perfect
} else {
  b = b + 'short.';
}

console.log(b); // read (b) and value is hello Ewin, your a is perfect
