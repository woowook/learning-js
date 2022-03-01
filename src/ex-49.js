// 49번
// compnum이라는 이름의 변수를 생성하고 50을 설정한다.
// 사용자에게 숫자를 입력하라고 요청하고 입력한 값이 compnum과 동일하지 않다면 입력한 값이 높은지 낮은지를 알려주고 다시 맞춰보라고 묻는다.
// 만약 compnum의 값과 일치하면 "Well done, you took [카운트] attempts"라는 메시지를 출력하라.

import { question } from 'readline-sync';

const compnum = 50;
let count = 0;
/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
while (true) {
  const number = Number(question('숫자를 입력하세요 : '));
  count += 1;
  if (number === compnum) {
    console.log(`\nWell done, you took ${count} attempts.`);
    break;
  } else if (number > compnum) {
    console.log('\n입력하신 숫자보다 낮습니다.\n다시 맞춰보세요.');
  } else {
    console.log('\n입력하신 숫자보다 높습니다.\n다시 맞춰보세요.');
  }
}
