// 40. 50 미만의 숫자를 입력하도록 요청한다.
// 50부터 입력한 숫자까지 카운트 다운하면서 숫자를 출력하되, 입력한 숫자까지 출력 되도록 하라.

import { question } from 'readline-sync';

const number = question('50 미만의 숫자를 입력하세요 : ');

if (number > 1 && number < 50) {
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
} else {
  console.log('입력하신 숫자를 다시 확인하세요');
}
