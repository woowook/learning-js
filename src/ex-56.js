// 56번
// 1과 10 사이의 정수를 임의로 선택한다.
// 사용자에게 숫자를 입력하라고 요청하고 임의로 선택한 숫자를 입력할 때까지 계속 숫자를 입력하게 하라.

import { question } from 'readline-sync';

const rand = Math.floor(Math.random() * 10) + 1;
console.log(rand);

/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
while (true) {
  const select = Number(question('숫자를 입력하세요(1~10) : '));
  if (rand === select) {
    console.log('숫자를 맞추셨습니다.');
    break;
  } else {
    console.log('틀렸습니다.');
  }
}
