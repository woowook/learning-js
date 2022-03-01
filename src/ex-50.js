// 50번
// 사용자에게 10과 20 사이의 숫자를 입력하라고 요청한다.
// 입력한 숫자가 10 이하이면 "Too low"라는 메시지를 출력하고 다시 입력하라고 요청한다.
// 만약 20 이상이면 "Too high" 라는 메시지를 출력하고 다시 입력하라고 요청한다.
// 사용자가 10과 20 사이의 값을 입력할 때까지 이 과정을 반복하고, 10과 20 사이의 값을 입력하면 "Thank you" 라는 메시지를 출력하라.

import { question } from 'readline-sync';

/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
while (true) {
  const number = Number(question('숫자를 입력하세요 : '));
  if (number <= 10) {
    console.log('Too low.\n다시 입력하세요.\n');
  } else if (number >= 20) {
    console.log('Too high.\n다시 입력하세요.\n');
  } else if (number > 10 && number < 20) {
    console.log('Thank you');
    break;
  } else {
    console.log('입력하신 값을 확인하세요.\n');
  }
}
