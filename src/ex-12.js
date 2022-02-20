// 12. 두 개의 숫자를 입력받는다. 만약 첫 번째 숫자가 두 번째 숫자보다 크면, 두 번째 숫자를 출력하라. 그렇지 않다면 첫 번째 숫자를 출력한 다음에 두번째 숫자를 출력하라.
import { question } from 'readline-sync';

const firstNumber = Number(question('첫번째 숫자를 입력하세요 : '));
const secondNumber = Number(question('두번째 숫자를 입력하세요 : '));

if (firstNumber > secondNumber) {
  console.log(`두 번째 숫자 ${secondNumber}가 더 큽니다.`);
} else {
  console.log(`첫 번째 숫자 ${firstNumber}, 두 번째 숫자 ${secondNumber}`);
}
