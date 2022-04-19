// 소수점 이하 두 자리가 있는 10과 100 사이의 숫자 다섯 개를 포함하는 배열을 생성한다.
// 사용자에게 2와 5 사이의 정수를 입력하도록 요청한다.
// 입력한 숫자가 범위에 없는 숫자라면 적절한 에러 메시지를 출력하고 다시 입력 하라고 한다.
// 배열에 있는 각 숫자를 사용자가 입력한 숫자로 나누고 소수점 둘째자리까지 표시하라.

import { question } from 'readline-sync';

const numberList = [];

for (let i = 0; i < 5; i++) {
  const randNumber = (Math.random() * 90 + 10).toFixed(2);
  numberList.push(randNumber);
}

console.log(numberList);

/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
while (true) {
  const number = question('2와 5사이 정수를 입력하세요 : ');
  if (number >= 2 && number <= 5 && number % 1 === 0) {
    for (let i = 0; i < 5; i++) {
      numberList[i] /= number;
      numberList[i] = numberList[i].toFixed(2);
      // Console.log(numberList[i].toFixed(2));
    }

    break;
  } else if (number < 2 && number % 1 === 0) {
    console.log(
      '입력하신 숫자가 범위보다 낮습니다. (범위 2 ~ 5)\n다시 입력하세요'
    );
  } else if (number > 5 && number % 1 === 0) {
    console.log(
      '입력하신 숫자가 범위보다 높습니다. (범위 2 ~ 5)\n다시 입력하세요'
    );
  } else {
    console.log('소수로 입력하셨습니다. 정수로 다시 입력하세요');
  }
}

console.log('\n');
console.log(numberList);
