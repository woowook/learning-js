// 사용자에게 숫자를 입력하라고 요청한다. 10에서 20 사이의 숫자를 입력한다면 배열에 저장한다.
// 다른 값이라면 "Outside the range"라는 메시지를 출력한다.
// 다섯 개의 숫자가 입력되었다면 "Thank you" 메시지를 출력하고 배열의 항목을 한 줄에 하나씩 출력하라

import { question } from 'readline-sync';

const number = [];

while (number.length < 5) {
  const numb = question('10에서 20 사이의 숫자를 입력하세요 : ');
  if (numb >= 10 && numb <= 20) {
    number.push(numb);
  } else {
    console.log('Outside the range');
  }
}

console.log('Thank you');
for (const element of number) {
  console.log(element);
}
