// 43. 사용자에게 원하는 카운트 방향(카운트 다운 또는 카운트 업)을 묻는다.
// 만약 업을 선택하면 가장 큰 숫자를 묻고 1부터 그 숫자까지 출력하라.
// 다운을 선택하면 20 미만의 숫자를 요청하고 20부터 그 숫자까지 출력하라.
// 업 또는 다운이 아닌 다른 것을 선택하면 "I don't understand"를 출력하라.

import { question } from 'readline-sync';

console.log('\n1) 카운트 업\n2) 카운트 다운\n');
const count = Number(question('원하는 카운트의 방향을 입력하세요 : '));

// If (count === 1) {
//   const maxNumber = question('\n가장 큰 숫자를 입력하세요 : ');
//   for (let i = 1; i <= maxNumber; i++) {
//     console.log(i);
//   }
// } else if (count === 2) {
//   const minNumber = question('\n20 미만의 숫자를 입력하세요 : ');
//   for (let j = 20; j >= minNumber; j--) {
//     console.log(j);
//   }
// } else {
//   console.log("I don't understand");
// }

if (count === 1) {
  const maxNumber = question('\n가장 큰 숫자를 입력하세요 : ');
  if (isNaN(maxNumber) === false) {
    if (maxNumber > 0) {
      for (let i = 1; i <= maxNumber; i++) {
        console.log(i);
      }
    } else {
      console.log('0보다 큰 값으로 입력하세요');
    }
  } else {
    console.log('숫자로 입력하세요');
  }
} else if (count === 2) {
  const minNumber = question('\n20 미만의 숫자를 입력하세요 : ');
  if (isNaN(minNumber) === false) {
    if (minNumber < 20) {
      for (let j = 20; j >= minNumber; j--) {
        console.log(j);
      }
    } else {
      console.log('20 미만으로 입력하세요');
    }
  } else {
    console.log('숫자로 입력하세요');
  }
} else {
  console.log("I don't understand");
}
