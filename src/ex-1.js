// 문제 1. 사용자의 이름을 입력 받아서 다음과 같이 출력하라.
// Hello [이름]

import { question } from 'readline-sync';

const name = question('사용자의 이름을 입력하세요 : ');
const output = 'Hello ' + name;
// Const output = `Hello ${name}`;
console.log(output);
