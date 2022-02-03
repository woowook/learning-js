import { question } from 'readline-sync';

const price = question('총 가격을 입력하세요 : ');
const person = question('인원을 입력하세요 : ');
const averagePrice = Number(price) / Number(person);
console.log(`한 사람당 지불해야되는 금액은 ${averagePrice}원 입니다.`);
