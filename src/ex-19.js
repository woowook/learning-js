/* 사용자에게 1이나 2 또는 3을 입력하라고 하자.
만약 1을 입력하면 "Thank you"라는 메시지를 표시하라.
만약 2를 입력하면 "well done"을 표시하라.
만약 3을 입력하면 "Correct"를 표시하라
만약 사용자가 다른 것을 입력하면 "Error message"를 표시하라.
*/

import { question } from 'readline-sync';

const inputNumber = Number(question('숫자를 입력하세요(1~3) : '));

if (inputNumber === 1) {
  console.log('Thank you');
} else if (inputNumber === 2) {
  console.log('well done');
} else if (inputNumber === 3) {
  console.log('Correct');
} else {
  console.log('Error message');
}
