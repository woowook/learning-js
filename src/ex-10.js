import { question } from 'readline-sync';

const weight = Number(question('체중을 입력하세요(kg) : '));
const pound = weight * 2.204;
// .toFixed(n) 소수점 n자리까지 표시
console.log(`몸무게는 ${pound} 파운드 입니다`);
