// 두 개의 빈 배열을 생성한다.
// 하나에는 사용자가 입력할 숫자 세 개를 담을 것이고, 다른 하나에는 다섯 개의 임의의 숫자를 담을 것이다.
// 두 개의 배열을 큰 배열 하나로 결합한다.
// 결합한 배열을 정렬하고 각 항목을 한 줄에 하나씩 출력하라.

import { question } from 'readline-sync';

const number1 = [];
const number2 = [];

while (number1.length < 3) {
  const inputNumber = Number(question('숫자를 입력하세요 : '));
  if (Number.isNaN(inputNumber) === false) {
    console.log(typeof inputNumber);
    number1.push(inputNumber);
  } else {
    console.log('숫자로 다시 입력하세요');
  }
}

for (let i = 0; i < 5; i++) {
  const inputNumber1 = Math.floor(Math.random() * 100);
  number2.push(inputNumber1);
}

const numb3 = number1.concat(number2);
console.log(numb3 + '\n');
// 숫자 비교해서 작은순 정렬
numb3.sort((a, b) => a - b);
console.log(numb3 + '\n');

for (const element of numb3) {
  console.log(element);
}
