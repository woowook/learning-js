// 다섯 개의 숫자들을 가진 배열을 출력한다.
// 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 사용자가 숫자를 고르면 그 항목의 위치(인덱스)를 출력한다.
// 만약 사용자가 입력한 숫자가 배열 안에 없다면 올바른 숫자를 입력할 때까지 다시 요청하라.

import { question } from 'readline-sync';

const number1 = [];
for (let i = 1; i < 6; i++) {
  const rand = Math.floor(Math.random() * 100);
  console.log(`생성한 난수 : ${rand}`);
  number1.push(rand);
}

console.log(number1 + '\n');

/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
while (true) {
  const inputNumber = Number(question('숫자를 입력하세요 : '));

  if (number1.includes(inputNumber) === true) {
    console.log(
      `숫자 ${inputNumber} 의 위치는 ${number1.indexOf(
        inputNumber
      )} 에 있습니다.`
    );
    break;
  }
}
