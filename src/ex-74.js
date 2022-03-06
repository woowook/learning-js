// 열 개의 색상이 담긴 배열을 생성한다.
// 사용자에게 0에서 4 사이의 시작 번호와 5에서 9 사이의 끝 번호를 입력하라고 요청하고
// 입력된 시작 번호부터 끝 번호까지의 색상을 출력하라.

import { question } from 'readline-sync';

const color = [
  'white',
  'black',
  'yellow',
  'blue',
  'red',
  'green',
  'pink',
  'purple',
  'gray',
  'coral',
];

const selectNumber = question(
  '0 ~ 4 사이의 시작번호와 5 ~ 9 사이의 끝 번호를 입력하세요(예 : 3-8) : '
);
const numberResult = selectNumber.split('-');
console.log(numberResult);
if (numberResult[0] > 4 || numberResult[0] < 0) {
  console.log('시작 번호를 잘못 입력하셨습니다.');
} else if (numberResult[1] < 5 || numberResult[1] > 9) {
  console.log('끝 번호를 잘못 입력하셨습니다.');
} else {
  for (let i = Number(numberResult[0]); i <= Number(numberResult[1]); i++) {
    console.log(color[i]);
  }
}

// Const selectNumber1 = question('0 ~ 4 사이의 시작번호를 입력하세요 : ');
// const selectNumber2 = question('5 ~ 9 사이의 끝번호를 입력하세요 : ');
// for (let i = Number(selectNumber1); i <= Number(selectNumber2); i++) {
//   console.log(color[i]);
// }
