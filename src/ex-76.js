// 사용자에게 파티에 초대할 사람 3명의 이름을 입력하라고 요청하고 배열에 저장한다.
// 모든 이름이 입력되면 추가할 사람이 있는지 묻는다.
// 만약 그렇다면 "n"이라고 답할 때까지 이름을 추가하게 한다.
// "n"이라고 입력하면 파티에 초대한 사람이 몇 명인지 표시하라.

import { question } from 'readline-sync';

const invite = [];

for (let i = 0; i < 3; i++) {
  const invitePerson = question('초대할 사람을 3명 입력하세요 : ');
  invite.push(invitePerson);
}

/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
while (true) {
  const finish = question('추가할 사람이 더 있습니까?(Y,N) : ');
  // N이나 n일 때만 멈추고 그 외 입력은 계속 루프
  if (finish === 'n' || finish === 'N') {
    console.log(`파티에 초대한 사람은 ${invite.length} 입니다.`);
    break;
  } else {
    const invitePerson = question('초대할 사람을 입력하세요 : ');
    invite.push(invitePerson);
  }
}
