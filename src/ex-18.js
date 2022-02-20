/* 사용자에게 숫자를 입력하라고 요청하자. 만약 10 미만이면 "Too low"라는 메시지를 표시하라.
만약 입력한 숫자가 10에서 20 사이라면 "Correct" 라고 표시하라.
그렇지 않다면 "Too high"라고 표시하라.
*/

import { question } from 'readline-sync';

const inputNumber = Number(question('숫자를 입력하세요 : '));

if (inputNumber < 10) {
  console.log('Too low');
} else if (inputNumber >= 10 && inputNumber <= 20) {
  console.log('Correct');
} else {
  console.log('Too high');
}
