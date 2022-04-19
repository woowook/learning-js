// 사용자에게 숫자 다섯 개를 입력하라고 요청한다.
// 입력된 숫자를 정렬하고 사용자에게 표시한다.
// 배열의 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 입력된 숫자를 배열에서 삭제하고 새로운 배열에 그 값을 저장하라

import { question } from 'readline-sync';

const number1 = [];
const number2 = [];

while (number1.length < 5) {
  const inputNumber = Number(question('숫자를 입력하세요 : '));
  if (Number.isNaN(inputNumber) === false) {
    number1.push(inputNumber);
  } else {
    console.log('숫자로 다시 입력하세요');
  }
}

console.log(number1 + '\n');
const inputNumber1 = Number(question('배열의 숫자 중 하나를 입력하세요 : '));
// 입력받은 숫자가 배열에 포함되어 있을때까지
while (number1.includes(inputNumber1) === true) {
  for (let i = 0; i < number1.length; i++) {
    if (number1[i] === inputNumber1) {
      // 빈 배열에 입력 받은 값 추가
      number2.push(inputNumber1);
      // 숫자 입력 받았던 배열에서 해당 값 삭제
      number1.splice(i, 1);
      i--;
    }
  }
}

console.log(number1);
console.log(number2);
