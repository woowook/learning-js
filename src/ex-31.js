// 31. 사용자에게 원의 반지름(원의 중심점으로부터 끝까지의 길이)을 입력하도 록 요청한다.
// 원의 넓이(π * 반지름의 2제곱)를 계산하여 출력하라

import { question } from 'readline-sync';

const radius = Number(question('원의 반지름을 입력하세요 : '));
// Console.log(`원의 넓이는 ${Math.PI.toFixed(2) * radius * radius}`);
console.log(`원의 넓이는 ${Math.PI.toFixed(2) * radius ** 2}`);
