// 39. 1부터 12 사이의 값을 입력하도록 요청한 뒤, 그 숫자에 대해 12까지의 곱셈표를 출력하라

import { question } from 'readline-sync';

const number = question('숫자를 입력하세요(1~12) : ');

if (number > 0 && number < 13) {
  for (let i = 1; i < 13; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
} else {
  console.log('입력한 숫자를 다시 확인하세요');
}
