// 사용자로부터 일수(날짜 수)를 입력 받아서 그 일수까지 몇 시간, 몇 분, 몇 초가 남았는지 출력하라.
// 그냥 일수를 시간, 분, 초로 변환하는건가? 남았는지 출력하라....

import { question } from 'readline-sync';

const day = Number(question('일수(날짜 수)를 입력하세요 : '));
const hour = day * 24;
const minute = hour * 60;
const second = minute * 60;
console.log(`시간은 ${hour} 입니다.`);
console.log(`분은 ${minute} 입니다.`);
console.log(`초는 ${second} 입니다.`);
