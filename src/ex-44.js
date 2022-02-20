// 44. 파티에 몇 명을 초대하고 싶은지를 묻는다.
// 만약 10 미만을 입력하면 이름을 묻고 "[이름] has been invited"라고 출력하는 것을 입력한 숫자만큼 반복하라.
// 10 이상을 입력하면 "Too many people"이 라는 메시지를 출력하라.

import { question } from 'readline-sync';

const invitedPerson = Number(
  question('파티에 초대하고 싶은 사람이 몇명입니까? : ')
);

if (invitedPerson > 0 && invitedPerson < 10) {
  for (let i = 0; i < invitedPerson; i++) {
    const name = question('\n초대할 사람의 이름을 입력하세요 : ');
    console.log(`${name} has been invited\n`);
  }
} else if (invitedPerson >= 10) {
  console.log('Too many people\n');
} else {
  console.log('입력한 내용을 다시 확인해주세요\n');
}
