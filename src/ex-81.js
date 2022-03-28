// 가장 좋아하는 과목 이름을 입력받고 각 문자 뒤에 '-'를 붙여서 출력하라.

import { question } from 'readline-sync';

const subject = question('가장 좋아하는 과목을 입력하세요 : ');
let sub1 = '';

for (const i of subject) {
  sub1 += i.concat('-');
  // Console.log(i.concat('-'));
}

console.log(sub1);
