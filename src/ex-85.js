// 사용자의 이름(영어로)을 입력하라고 요청한 뒤, 그 이름 모음이 몇 개인지 출력하라.

import { question } from 'readline-sync';

const name = question('사용자의 이름을 입력하세요 : ');
// Const vowels = ['a', 'e', 'i', 'o', 'u'];
const convertName = name.toLowerCase();
let count = 0;

for (const i of convertName) {
  switch (i) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      count += 1;
      break;
    default:
  }
  // If (vowels.indexOf(i) !== -1) {
  //   count += 1;
  // }
}

console.log(count);
