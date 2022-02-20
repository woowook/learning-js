// 36. 035번 프로그램을 수정하여 사용자가 이름과 숫자를 입력하게 하여, 이름을 입력한 숫자만큼 출력하라.

import { question } from 'readline-sync';

const name = question('사용자의 이름을 입력하세요 : ');
const number = question('반복하실 숫자를 입력하세요 : ');

for (let i = 0; i < number; i++) {
  console.log(name);
}
