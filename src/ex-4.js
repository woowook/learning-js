import { question } from 'readline-sync';

const firstNumber = question('첫번째 숫자를 입력하세요 : ');
const secondNumber = question('두번째 숫자를 입력하세요 : ');
const total = Number(firstNumber) + Number(secondNumber);
console.log(`The Total is ${total}`);
