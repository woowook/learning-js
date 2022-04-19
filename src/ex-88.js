// 다섯 개의 정수를 입력받아 배열에 저장한다.
// 정렬을 한 후 역순으로 표시하라.

import { question } from 'readline-sync';

const number_ = [];
for (let i = 1; i < 6; i++) {
  const numb = question(`${i}번째 숫자를 입력하세요 : `);
  // 입력받은 숫자 배열에 추가
  number_.push(numb);
}

// 입력받은 숫자 정렬
number_.sort((a, b) => a - b);

// 정렬한 후 역으로 표시
for (let j = number_.length; j > 0; j--) {
  console.log(number_[j - 1]);
}
