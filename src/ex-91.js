// 다섯 개의 숫자(이 숫자들 중 2개는 반복 되어야 함)를 담고 있는 배열을 생성한다.
// 사용자에게 배열 전체를 출력한다.
// 사용자에게 배열 속에 있는 숫자들 하나를 입력하라고 요청한 뒤,
// 입력한 숫자가 배열에 몇 개 있는지 메시지를 표시하라.

import { question } from 'readline-sync';

const number = [1, 10, 2, 1, 6];
let count = 0;
console.log(number);

const inputNumber = Number(question('배열 안의 숫자를 하나 입력하세요 : '));

// Reduce로 사용하려고 했더니 `Array#reduce()` is not allowed (unicorn/no-array-reduce)
// Const result = number.reduce((accu, curr) => {
//   accu[curr] = (accu[curr] || 0) + 1;
//   return accu;
// }, {});
// console.log(result);

// filter() 배열의 모든 요소를 순회하여 조건에 부합하는 데이터를 모아서 새로운 배열을 반환
const result = number.filter((item) => item === inputNumber);
console.log(`입력한 값은 숫자가 배열 안에 ${result.length}개 있습니다.`);

// For문으로 하면?
if (number.includes(inputNumber)) {
  for (const element of number) {
    if (element === inputNumber) {
      count += 1;
    }
  }

  console.log(`입력된 숫자가 배열 안에 ${count}개 있습니다`);
} else {
  console.log('입력한 값을 다시 확인해주세요');
}
