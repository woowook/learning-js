import { question } from 'readline-sync';

const firstNumber = question('첫번째 숫자를 입력하세요 : ');
const secondNumber = question('두번째 숫자를 입력하세요 : ');
const thirdNumber = question('두번째 숫자를 입력하세요 : ');
const total =
  (Number(firstNumber) + Number(secondNumber)) * Number(thirdNumber);
console.log(`The answer is ${total}`);
