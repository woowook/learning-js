// 34. 만약 사용자가 1을 입력하면 한 면의 길이를 요청하여 사각형의 넓이를 구하여 출력하라.
// 만약 2를 입력하면 밑변과 높이를 요청하여 삼각형의 넓이를 구하여 출력 하라.
// 다른 것을 입력하면 적절한 오류 메시지가 출력 되도록 한다.

import { question } from 'readline-sync';

console.log(`\n1) Square\n2) Triangle\n`);
const number = Number(question('Enter a Number : '));

if (number === 1) {
  const length = Number(question('\n한 면의 길이를 입력하세요 : '));
  console.log(`사각형의 넓이는 ${length ** 2}입니다.`);
} else if (number === 2) {
  const base = Number(question('\n삼각형의 밑변을 입력하세요 : '));
  const hight = Number(question('삼각형의 높이를 입력하세요 : '));
  console.log(`삼격형의 넓이는 ${base * hight}입니다.`);
} else {
  console.log(`\n잘못 입력 하셨습니다. 화면에 보이는 숫자를 입력하세요`);
}
