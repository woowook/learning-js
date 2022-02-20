// 32. 원기둥의 반지름과 깊이를 입력하도록 요청한다.
// 원기둥의 부피(원 넓이 * 깊이)를 구하고 결과를 반 올림하여 소수점 세째 자리까지 출력하라.

import { question } from 'readline-sync';

const radius = Number(question('원가둥의 반지름을 입력하세요 : '));
const hight = Number(question('원기둥의 높이를 입력하세요 : '));

const radiusArea = Math.PI.toFixed(2) * radius ** 2;
const volume = Number(radiusArea * hight).toFixed(3);
console.log(`원의 부피는 ${volume}입니다.`);
