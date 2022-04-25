// 사용자에게 행과 열을 선택하라고 요청하고, 096번 프로그램의 2차원 배열을 이용하여 해당 값을 출력하라.

import { question } from 'readline-sync';

const array = [
  [2, 5, 8],
  [3, 7, 4],
  [1, 6, 9],
  [4, 2, 0],
];

// Const arrayLength = [];

for (const element of array) {
  console.log(element);
}

const col = question('원하시는 행을 입력하세요 : ');
const row = question('원하시는 열을 입력하세요 : ');

// 2차원 배열의 행, 열 길이... 행이 가변이 아닐때는 array[0].length, array.length면 될 거 같은데 가변일 경우는..?
// for (let i = 0; i < array.length; i++) {
//   arrayLength.push(array[i].length);
// }

// console.log(Boolean(arrayLength[col]));
// console.log(arrayLength[col + 1]);

// if (
//   col > arrayLength[col] ||
//   row > array.length ||
//   array[col][row] === undefined
// ) {
//   console.log('입력하신 값이 범위에 맞지 않습니다.');
// } else {
//   console.log(`입력하신 위치의 값은 ${array[col][row]} 입니다`);
// }

console.log(`입력하신 위치의 값은 ${array[col][row]} 입니다`);
