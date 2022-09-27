import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let bricks = readString('pyramid-bricks');

  // --- build a pyramid ---

let pyramid = '';


for (let i = 1; i <= bricks.length; i++){
  for (let j = 0; j < i; j++){
    pyramid += bricks[j];
  }
  pyramid += '\n';
}

/*
let word = '';
  
  for (const brick of bricks) {
    word +=  brick;
    pyramid += word + '\n';
  }
  */
  // --- display the pyramid ---

  displayString('out', pyramid);
});