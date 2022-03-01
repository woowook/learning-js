// 48번.
// 사용자가 파티에 초대하고 싶은 사람의 이름을 입력하라고 요청 한다.
// 그 다음에, "[이름] has now been invited"라는 메시지를 출력하고 카운트에 1을 더한다.
// 다른 사람을 더 초대하고 싶은 지를 묻고 더 이상 파티에 초대하고 싶은 사람이 없을 때까지 반복한다.
// 초대하고 싶은 사람이 없다면 몇 명이 파티에 참석하는지를 표시하라.

import { question } from 'readline-sync';

/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
let count = 0;
while (true) {
  const name = question('파티에 초대하고 싶은 사람의 이름을 입력하세요 : ');
  console.log(`${name} has now been invited.`);
  count += 1;
  const choice = question('다른 사람을 더 초대하시겠습니까?(Y/N) : ');
  if (choice !== 'y' && choice !== 'Y') {
    console.log(`총 ${count}명 초대하셨습니다.`);
    break;
  }
}
