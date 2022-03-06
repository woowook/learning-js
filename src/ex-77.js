// 076번 프로그램을 수정하여 초대할 사람들의 이름이 배열에 모두 추가되면 전체 명단을 출력하고 배열에 있는 이름들 중 하나를 입력하라고 요청한다.
// 입력된 이름의 위치(인덱스)를 출력하고 그 사람을 정말로 파티에 초대할 것인지를 묻는다.
// 만약 "n"이라고 답하면 그 항목을 배열서 삭제하고 배열을 다시 출력한다.

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

for (const element of invite) {
  console.log(element);
}

const name = question('출력된 이름들 중 하나를 입력하세요 : ');
console.log(`${name}의 위치는 ${invite.indexOf(name)}입니다.`);
const choice = question('정말로 파티에 초대하시겠습니까?(Y/N) : ');
if (choice === 'n' || choice === 'N') {
  invite.splice(invite.indexOf(name), 1);
  for (const element of invite) {
    console.log(element);
  }
}
