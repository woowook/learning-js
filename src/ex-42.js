// 42. total이라는 이름의 변수에 0을 설정하고 숫자를 입력하라는 요청을 다섯 번 반복한다.
// 숫자를 입력할 때마다 입력한 값을 total에 더할 것인지를 묻는다.
// 더하길 원한다는 답을 하면 total에 그 값을 더하고, 그렇지 않다면 더하지 않는다.
// 다섯 개의 숫자가 모두 입력되면 total을 출력하라.

import { question } from 'readline-sync';

// Let total = 0;

// For (let i = 0; i < 5; i++) {
//   const number = question('숫자를 입력하세요 : ');
//   console.log('\n1) 숫자를 더한다.\n2) 숫자를 더하지 않는다');
//   const answer = Number(question('숫자를 더하시겠습니까? : '));
//   if (answer === 1) {
//     total += number;
//   } else if (answer === 2) {
//     continue;
//   } else {
//     console.log('\n숫자를 잘못 입력하셨습니다.');
//     break;
//   }
// }
let total = 0;
for (let i = 0; i < 5; i++) {
  const number = Number(question('\n숫자를 입력하세요 : '));
  // 입력받은 내용이 숫자인지 판단
  // 왜 빨간줄이 그어지는거지?
  if (Number.isNaN(number) === false) {
    console.log('\n1) 숫자를 더한다.\n2) 숫자를 더하지 않는다');
    const answer = Number(question('숫자를 더하시겠습니까? : '));
    if (answer === 1) {
      total += number;
    } else if (answer === 2) {
      continue;
    } else {
      console.log('\n숫자를 잘못 입력하셨습니다. 다시 입력하세요');
      --i;
      continue;
    }
  } else {
    console.log('숫자로 입력해주세요');
    break;
  }
}

console.log(`Total = ${total}`);
