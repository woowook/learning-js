// 47번.
// 사용자에게 숫자를 입력하라고 요청한 다음에 다른 숫자를 입력하라고 하자.
// 두 숫자들을 더한 뒤, 또 다른 숫자를 더하고 싶은지 묻고 "y" 라고 입력하면 다른 숫자를 입력받아 더하고 다시 같은 질문을 한다.
// "y"가 아닌 답을 하면 루프를 종료하고 총합을 출력하라.

import { question } from 'readline-sync';

let numberSum = 0;
/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
while (true) {
  const firstNumber = Number(question('첫번째 숫자를 입력하세요 : '));
  const secondNumner = Number(question('두번째 숫자를 입력하세요 : '));
  const sumTemporary = firstNumber + secondNumner;
  numberSum += sumTemporary;
  const choice = question('또 다른 숫자를 입력하시겠습니까?(Y/N) : ');
  if (choice !== 'y' && choice !== 'Y') {
    console.log(`The Total is... ${numberSum}`);
    break;
  }
}
