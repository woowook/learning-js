import { question } from 'readline-sync';

const firstName = question('사용자의 이름을 입력하세요 : ');
const lastName = question('사용자의 성을 입력하세요 : ');
const output = `Hello ${firstName} ${lastName}`;
console.log(output);
