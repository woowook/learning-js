/* 14. 사용자에게 10과 20(포함) 사이 의 숫자를 입력하라고 요청한다. 
만약 입력한 값이 이 범위 안의 숫자이면 "Thank you"라는 메시지를 출력하라. 
그렇지 않다면 "Incorrect answer"라는 메시지를 출력하라.
*/

import { question } from 'readline-sync';

const inputNumber = Number(question('숫자를 입력하세요(10 ~ 20) : '));

if (inputNumber >= 10 && inputNumber <= 20) {
  console.log('Thank you!');
} else {
  console.log('Incorrect Answer!');
}
