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
let pyramid1 = 30;
for (let i = 1; i <= pyramid1; i++){
  for (let j = 1; j < i; j++){
    pyramid += bricks;
  }
  pyramid += '\n';
}

  /*
  for (const brick of bricks) {
    for (const brick1 of bricks) {
      pyramid +=  brick + brick1;
    }
    pyramid += '\n';
  }*/
  // --- display the pyramid ---

  displayString('out', pyramid);
});