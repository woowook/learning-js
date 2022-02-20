// 28. 27번 프로그래밍을 업데이트하여 소수점 둘째 자리까지 출력하라

import { question } from 'readline-sync';

const number = Number(question('소수점을 포함한 숫자를 입력하세요 : '));
// 소수점 2자리까지 표시(반올림)
console.log(`소수점 2자리까지 표시(세번째에서 반올림) : ${number.toFixed(2)}`);

// 소수점 2자리까지 표시(버림)
const temp1 = number * 100;
const temp2 = Math.floor(temp1);
const result = temp2 / 100;
console.log(`소수점 2자리까지 표시(버림) : ${result}`);
