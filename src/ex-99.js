// 이전 프로그램을 변경하여 어떤 행을 출력할지 사용자에게 묻는다. 입력받은 행을 출력한다.
// 열을 선택하라고 요청하고 그 행에서의 해당 열을 출력한다.
// 그 값을 변경하고 싶은지 사용자에게 묻고, 그러길 원한다면 새로운 값을 입력받아 변경한다.
// 마지막으로 그 행 전체를 다시 출력하라.

import { question } from 'readline-sync';

const array = [
  [2, 5, 8],
  [3, 7, 4],
  [1, 6, 9],
  [4, 2, 0],
];

for (const element of array) {
  console.log(element);
}

const col = question('원하시는 행을 입력하세요 : ');
console.log(array[col]);

const row = question('원하시는 열을 입력하세요 : ');
console.log(array[col][row]);

const select = question('값을 변경하실 건가요? (y/n) : ');
if (select === 'Y' || select === 'y') {
  const number = question('새로운 값을 입력하세요 : ');
  array[col][row] = Number(number);
}

console.log(array[col]);
