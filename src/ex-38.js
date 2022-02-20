// 38. 037번 프로그램을 수정하여 숫자도 입력하도록 요청하자.
// 이름의 각 문자를 한 줄에 하나씩 출력하는 작업을 입력한 숫자만 큼 반복하라.

import { question } from 'readline-sync';

const name = question('사용자의 이름을 입력하세요 : ');
const multi = question('반복 횟수를 입력하세요 : ');

for (let j = 0; j < multi; j++) {
  for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
  }

  console.log('\n');
}
