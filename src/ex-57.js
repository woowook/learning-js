// 57번
// 056번 프로그램을 업데이트하여 사용자가 입력한 숫자가 큰지 작은지를 알려주고 다시 숫자를 고르게 하라.

import { question } from 'readline-sync';

const rand = Math.floor(Math.random() * 10) + 1;
console.log(rand);

/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
while (true) {
  const select = Number(question('숫자를 입력하세요(1~10) : '));
  if (rand === select) {
    console.log('숫자를 맞추셨습니다.');
    break;
  } else if (rand > select) {
    console.log('입력하신 숫자보다 큽니다. 다시 선택해주세요.');
  } else {
    console.log('입력하신 숫자보다 작습니다. 다시 선택해주세요.');
  }
}
