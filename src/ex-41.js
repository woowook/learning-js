// 41. 이름과 숫자를 입력하도록 요청한다.
// 입력한 숫자가 10 미만이면 입력한 숫자만큼 이름을 출력하고 10 이상이면 "Too high" 세 번 출력하라.

import { question } from 'readline-sync';

const name = question('이름을 입력하세요 : ');
const repeat = question('반복하실 횟수를 입력하세요 : ');

if (repeat > 1 && repeat < 10) {
  for (let i = 0; i < repeat; i++) {
    console.log(name);
  }
} else if (repeat >= 10) {
  console.log('Too High');
} else {
  console.log('Too Low');
}
