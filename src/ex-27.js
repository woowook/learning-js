// 27. 사용자에게 소수점 이하 자릿수가 많은 숫자를 입력하도록 요청한다.
// 이 숫자에 2를 곱한 결과를 출력한다.

import { question } from 'readline-sync';

const number1 = question('소수점을 포함한 숫자를 입력하세요 : ');
console.log(number1 * 2);
